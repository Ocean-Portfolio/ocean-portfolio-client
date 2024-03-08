import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryCarouselContextProps {
  tabRef: {
    current: HTMLDivElement | null;
  };
}

export const StaticContextHistoryCarousel =
  createStaticContext<HistoryCarouselContextProps>({
    tabRef: {
      current: null,
    },
  });
