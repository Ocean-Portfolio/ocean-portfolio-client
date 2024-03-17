import dynamic from 'next/dynamic';
import { Suspense, useContext } from 'react';
import {
  DispatcherContextHistory,
  StaticContextHistory,
  ValueContextHistory,
} from '@/components/History/History.context';
import HistorySummary from '@/components/History/Summary/HistorySummary';
import { getStaticContext } from '@/utils/context/StaticContext';

const HistoryCarouselContainer = dynamic(
  () => import('@/containers/HistoryCarousel'),
  {
    ssr: false,
    loading: () => <></>,
  },
);

interface SummaryContainerProps {
  isMobile: boolean;
}

const HistorySummaryContainer = ({ isMobile }: SummaryContainerProps) => {
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
                  <HistoryCarouselContainer />
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

export default HistorySummaryContainer;
