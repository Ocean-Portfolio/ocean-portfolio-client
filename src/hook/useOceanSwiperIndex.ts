import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { ContextValueOceanSwiper } from '@/components/OceanSwiper/OceanSwiper.context';
import { customEvents } from '@/const/customEvents';
import { getStaticContext } from '@/utils/context/StaticContext';
import { eventManager } from '@/utils/eventManager';
import useEventListener from './useEventListener';

export const useOceanSwiperIndex = () => {
  const { swiperWrapperRef } = getStaticContext(ContextValueOceanSwiper);
  const [realIndex, setRealIndex] = useState(0);

  const { add, remove } = eventManager(
    swiperWrapperRef,
    customEvents.SWIPER_REAL_INDEX_CHANGE,
    (e) => {
      setRealIndex((e as CustomEvent<Swiper>).detail.realIndex);
    },
  );

  useEventListener<CustomEvent<HTMLDivElement>>(
    typeof window !== 'undefined' ? window : null,
    customEvents.SWIPER_INIT,
    (e) => {
      if (e.detail === swiperWrapperRef.current) add();
    },
  );

  useEffect(() => {
    return () => {
      remove();
    };
  }, []);

  return { realIndex };
};
