import { createStaticContext } from '@/utils/context/StaticContext';

export interface ContextDispatchOceanSwiperProps {}

interface ContextOceanSwiper {
  buttonRefs: {
    prev: HTMLButtonElement | null;
    next: HTMLButtonElement | null;
  };
}

export const ContextDispatchOceanSwiper =
  createStaticContext<ContextDispatchOceanSwiperProps>({});

export const ContextValueOceanSwiper = createStaticContext<ContextOceanSwiper>({
  buttonRefs: {
    prev: null,
    next: null,
  },
});
