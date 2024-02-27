'use client';

import 'swiper/css';

import React from 'react';
import HistoryCard from '../Card/History/HistoryCard';
import HistoryDetailCard from '../Card/HistoryDetail/HistoryDetailCard';
import HistorySlideButton from '../HistorySlideButton/HistorySlideButton';
import HistoryTab from '../HistoryTab/HistoryTab';
import OceanSwiper from '../OceanSwiper/OceanSwiper';
import { slideStyle, topStyle } from './HistorySwiper.css';

const HistorySwiper = () => {
  return (
    <OceanSwiper>
      <OceanSwiper.Top className={topStyle}>
        <HistorySlideButton direction="PREV" />
        <HistoryTab />
        <HistorySlideButton direction="NEXT" />
      </OceanSwiper.Top>
      <OceanSwiper.Main hiddenNavigation>
        <OceanSwiper.Slide></OceanSwiper.Slide>
        <OceanSwiper.Slide></OceanSwiper.Slide>
        <OceanSwiper.Slide></OceanSwiper.Slide>
      </OceanSwiper.Main>
    </OceanSwiper>
  );
};

export default HistorySwiper;
