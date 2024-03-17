'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames';
import dynamic from 'next/dynamic';
import React, { Suspense, useContext, useState } from 'react';
import UAParser from 'ua-parser-js';
import Button from '@/composable/Button/Button';
import HistorySummaryContainer from '@/containers/HistorySummary';
import { useReactiveLayout } from '@/hook/useReactiveLayout';
import UserInfoProvider from '@/Provider/UserInfoProvider';
import { getStaticContext } from '@/utils/context/StaticContext';
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

History.SummaryContainer = HistorySummaryContainer;
History.CarouselContainer = dynamic(
  () => import('@/containers/HistoryCarousel'),
  {
    ssr: false,
    loading: () => <></>,
  },
);
History.Menu = Menu;

export default History;
