'use client';

import { useSuspenseQuery } from '@apollo/client';
import React, { Suspense, useContext, useState } from 'react';
import UAParser from 'ua-parser-js';
import { GET_HISTORY_ITEM_BY_HISTORY_ID } from '@/gql/queries/history_item';
import { useReactiveLayout } from '@/hook/useReactiveLayout';
import UserInfoProvider from '@/Provider/UserInfoProvider';
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
  ValueContextHistory,
} from './History.context';
import HistorySummary from './Summary/HistorySummary';

interface Props extends HistorySectionContextProps {
  userAgent: UAParser.IResult;
}

const History = ({ summary, userAgent }: Props) => {
  const { isMobile } = useReactiveLayout(userAgent);
  const [selectInfo, setSelectInfo] = useState({
    isSelected: false,
    id: '',
    summary_id: '',
    index: -1,
  });

  return (
    <UserInfoProvider>
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
            <section suppressHydrationWarning>
              <History.SummaryContainer isMobile={isMobile} />
              {!isMobile && selectInfo.isSelected && (
                <Suspense fallback={<></>}>
                  <History.CarouselContainer />
                </Suspense>
              )}
            </section>
          </ValueContextHistory.Provider>
        </DispatcherContextHistory.Provider>
      </StaticContextHistory.Provider>
    </UserInfoProvider>
  );
};
interface SummaryContainerProps {
  isMobile: boolean;
}

const SummaryContainer = ({ isMobile }: SummaryContainerProps) => {
  const { summary } = getStaticContext(StaticContextHistory);
  const { selectInfo } = useContext(ValueContextHistory);
  const { setSelectInfo } = useContext(DispatcherContextHistory);

  const handleClick = (id: string, summary_id: string, index: number) => {
    setSelectInfo({
      isSelected: true,
      id,
      summary_id,
      index,
    });
  };

  const summaryDisplayList =
    selectInfo.isSelected && !isMobile
      ? summary.filter(
          (historySummary) => historySummary.id === selectInfo.summary_id,
        )
      : summary;

  return (
    <>
      {summaryDisplayList.map((historySummary) => {
        if (!historySummary.histories.length) return null;

        return (
          <HistorySummary
            key={historySummary.id}
            summary_id={historySummary.id}
            title={historySummary.name}
            data={historySummary.histories}
            isDetailView={selectInfo.isSelected}
            selectIndex={selectInfo.index}
            handleClick={handleClick}
          >
            {isMobile && (
              <HistorySummary.List>
                <Suspense fallback={<></>}>
                  <History.CarouselContainer />
                </Suspense>
              </HistorySummary.List>
            )}
            {!isMobile && <HistorySummary.Swipe />}
          </HistorySummary>
        );
      })}
    </>
  );
};

const CarouselContainer = () => {
  const { selectInfo } = useContext(ValueContextHistory);

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
  return <HistoryCarousel data={data} />;
};

History.SummaryContainer = SummaryContainer;
History.CarouselContainer = CarouselContainer;

export default History;
