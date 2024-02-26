import { createStaticContext } from '@/utils/context/StaticContext';

interface ContextOceanSwiper {
  swiperWrapperRef: {
    current: HTMLDivElement | null;
  };
  buttonRefs: {
    prev: HTMLButtonElement | null;
    next: HTMLButtonElement | null;
  };
}

export const ContextValueOceanSwiper = createStaticContext<ContextOceanSwiper>({
  swiperWrapperRef: {
    current: null,
  },
  buttonRefs: {
    prev: null,
    next: null,
  },
});
