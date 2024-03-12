'use client';

import { useSuspenseQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { GET_HISTORY_ITEM_BY_HISTORY_ID } from '@/gql/queries/history_item';
import { useUserInfo } from '@/hook/useUserInfo';
import {
  GetHistoryItemByHistoryIdQuery,
  GetHistoryItemByHistoryIdQueryVariables,
} from '@/types/graphql';
import { getStaticContext } from '@/utils/context/StaticContext';
import { getPeriod } from '@/utils/date/getPeriod';
import HistoryCarousel from './Carousel/HistoryCarousel';
import {
  DispatcherContextHistory,
  HistorySectionContextProps,
  StaticContextHistory,
  SummaryData,
  ValueContextHistory,
} from './History.context';
import HistorySummary from './Summary/HistorySummary';

interface Props extends HistorySectionContextProps {}

const History = ({ summary }: Props) => {
  const [selectInfo, setSelectInfo] = useState({
    isSelected: false,
    id: '',
    summary_id: '',
  });

  return (
    <StaticContextHistory.Provider
      value={{
        summary,
      }}
    >
      <DispatcherContextHistory.Provider
        value={{
          setSelectInfo,
        }}
      >
        <ValueContextHistory.Provider
          value={{
            selectInfo,
          }}
        >
          <section>
            {!selectInfo.isSelected && <History.Summary />}
            {selectInfo.isSelected && <History.Carousel />}
          </section>
        </ValueContextHistory.Provider>
      </DispatcherContextHistory.Provider>
    </StaticContextHistory.Provider>
  );
};

const Summary = () => {
  const { summary } = getStaticContext(StaticContextHistory);
  const { setSelectInfo } = useContext(DispatcherContextHistory);

  const handleClick = (id: string, summary_id: string) => {
    setSelectInfo({
      isSelected: true,
      summary_id,
      id,
    });
  };

  return (
    <>
      {summary.map((historySummary) => {
        if (!historySummary.histories.length) return null;

        return (
          <HistorySummary
            key={historySummary.id}
            summary_id={historySummary.id}
            title={historySummary.name}
            data={historySummary.histories}
            handleClick={handleClick}
          />
        );
      })}
    </>
  );
};

const Carousel = () => {
  const { summary } = getStaticContext(StaticContextHistory);
  const { selectInfo } = useContext(ValueContextHistory);
  const { setSelectInfo } = useContext(DispatcherContextHistory);

  const selectedSummary = summary.find(
    (historySummary) => historySummary.id === selectInfo.summary_id,
  ) as SummaryData;

  const handleClick = (id: string, summary_id: string) => {
    setSelectInfo({
      isSelected: true,
      id,
      summary_id,
    });
  };

  const historyItemQuery = useSuspenseQuery<
    GetHistoryItemByHistoryIdQuery,
    GetHistoryItemByHistoryIdQueryVariables
  >(GET_HISTORY_ITEM_BY_HISTORY_ID, {
    variables: {
      history_id: Number(selectInfo.id),
    },
  });

  const data = historyItemQuery.data.getHistoryItemByHistoryId.map(
    (historyItem) => {
      return {
        detail: {
          title: historyItem.title,
          period: getPeriod(
            Number(historyItem.start_date),
            Number(historyItem.end_date),
          ),
          position: historyItem.position,
          content: historyItem.content,
        },
        impact: historyItem.impacts.map((impact) => {
          return {
            before: impact.before,
            after: impact.after,
            content: impact.content,
          };
        }),
      };
    },
  );

  return (
    <>
      <HistorySummary
        summary_id={selectedSummary.id}
        title={selectedSummary.name}
        data={selectedSummary.histories}
        handleClick={handleClick}
      />
      <HistoryCarousel data={data} />
    </>
  );
};

History.Summary = Summary;
History.Carousel = Carousel;

export default History;
