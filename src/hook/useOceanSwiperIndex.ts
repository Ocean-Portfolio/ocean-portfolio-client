import { useState } from 'react';
import Swiper from 'swiper';
import { customEvents } from '@/const/customEvents';
import useEventListener from './useEventListener';

export const useOceanSwiperIndex = () => {
  const [readIndex, setIndex] = useState(0);

  useEventListener<CustomEvent<Swiper>>(
    window,
    customEvents.SWIPER_REAL_INDEX_CHANGE,
    (e) => {
      setIndex(e.detail.realIndex);
    },
  );

  return { readIndex };
};
