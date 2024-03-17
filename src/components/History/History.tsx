'use client';

import { useSuspenseQuery } from '@apollo/client';
import classNames from 'classnames';
import React, { Suspense, useContext, useState } from 'react';
import UAParser from 'ua-parser-js';
import Button from '@/composable/Button/Button';
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
  ValueContextHistoryProps,
} from './History.context';
import {
  menuButtonSelectedStyle,
  menuButtonStyle,
  menuStyle,
  wrapColumnStyle,
  wrapStyle,
} from './History.css';
import HistorySummary from './Summary/HistorySummary';

interface Props extends HistorySectionContextProps {
  userAgent: UAParser.IResult;
}

const History = ({ summary, userAgent }: Props) => {
  const { isMobile } = useReactiveLayout(userAgent);
  const [value, setValue] = useState<ValueContextHistoryProps>({
    page: 0,
    isSelected: false,
    state: Array.from({ length: summary.length }, () => ({
      id: '',
      summary_id: '',
      index: -1,
    })),
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
            dispatcher: setValue,
          }}
        >
          <ValueContextHistory.Provider value={value}>
            <section
              className={classNames(
                wrapStyle,
                value.isSelected && wrapColumnStyle,
              )}
              suppressHydrationWarning
            >
              {!isMobile && value.isSelected && <History.Menu />}
              <History.SummaryContainer isMobile={isMobile} />
              {!isMobile && value.isSelected && (
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
  const { isSelected, page, state } = useContext(ValueContextHistory);
  const { dispatcher } = useContext(DispatcherContextHistory);

  const handleClick = (id: string, summary_id: string, index: number) => {
    dispatcher((prev) => {
      const newState = [...prev.state];
      newState[page] = {
        id,
        summary_id,
        index,
      };
      return {
        ...prev,
        isSelected: true,
        state: newState,
      };
    });
  };

  const summaryDisplayList =
    isSelected && !isMobile
      ? summary.filter(
          (historySummary) => historySummary.id === state[page].summary_id,
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
            isDetailView={isSelected}
            selectIndex={state[page].index}
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
  const { page, state } = useContext(ValueContextHistory);

  const historyItemQuery = useSuspenseQuery<
    GetHistoryItemByHistoryIdQuery,
    GetHistoryItemByHistoryIdQueryVariables
  >(GET_HISTORY_ITEM_BY_HISTORY_ID, {
    variables: {
      history_id: Number(state[page].id),
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

const Menu = () => {
  const { summary } = getStaticContext(StaticContextHistory);
  const { page } = useContext(ValueContextHistory);
  const { dispatcher } = useContext(DispatcherContextHistory);

  const handleClick = (pageIndex: number) => {
    dispatcher((prev) => {
      return {
        ...prev,
        page: pageIndex,
        isSelected: true,
      };
    });
  };

  return (
    <div className={menuStyle}>
      {summary.map((historySummary, index) => {
        return (
          <Button
            className={classNames(
              menuButtonStyle,
              page === index ? menuButtonSelectedStyle : null,
            )}
            key={historySummary.id}
            as="button"
            onClick={() => {
              handleClick(index);
            }}
          >
            {historySummary.name.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
};

History.SummaryContainer = SummaryContainer;
History.CarouselContainer = CarouselContainer;
History.Menu = Menu;

export default History;
