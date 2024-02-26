'use client';

import 'swiper/css';

import React from 'react';
import HistoryCard from '../Card/History/HistoryCard';
import HistorySlideButton from '../HistorySlideButton/HistorySlideButton';
import HistoryTab from '../HistoryTab/HistoryTab';
import OceanSwiper from '../OceanSwiper/OceanSwiper';

const HistorySwiper = () => {
  const mock1 = ['a', 'b', 'c'];
  const mock2 = ['d', 'e', 'f'];
  const mock3 = ['g', 'h', 'i'];

  return (
    <OceanSwiper>
      <OceanSwiper.Top className="">
        <HistorySlideButton direction="PREV" />
        <HistoryTab />
        <HistorySlideButton direction="NEXT" />
      </OceanSwiper.Top>
      <OceanSwiper.Main hiddenNavigation>
        <OceanSwiper.Slide>
          {mock1.map((id) => {
            return (
              <HistoryCard key={id} visible_status="VISIBLE" sizeToken="LARGE">
                <HistoryCard.Company companyName="회사명" />
                <HistoryCard.Position positionName="직책명" />
                <HistoryCard.Period period="기간" />
              </HistoryCard>
            );
          })}
        </OceanSwiper.Slide>
        <OceanSwiper.Slide>
          {mock2.map((id) => {
            return (
              <HistoryCard key={id} visible_status="VISIBLE" sizeToken="LARGE">
                <HistoryCard.Company companyName="회사명" />
                <HistoryCard.Position positionName="직책명" />
                <HistoryCard.Period period="기간" />
              </HistoryCard>
            );
          })}
        </OceanSwiper.Slide>
        <OceanSwiper.Slide>
          {mock3.map((id) => {
            return (
              <HistoryCard key={id} visible_status="VISIBLE" sizeToken="LARGE">
                <HistoryCard.Company companyName="회사명" />
                <HistoryCard.Position positionName="직책명" />
                <HistoryCard.Period period="기간" />
              </HistoryCard>
            );
          })}
        </OceanSwiper.Slide>
      </OceanSwiper.Main>
    </OceanSwiper>
  );
};

export default HistorySwiper;
