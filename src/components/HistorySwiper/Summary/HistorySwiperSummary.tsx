'use client';

import 'swiper/css';

import React from 'react';
import HistoryCard from '@/components/Card/History/HistoryCard';
import { HistoryCardContextProps } from '@/components/Card/History/HistoryCard.context';
import { historyCardWrapWidthStyle } from '@/components/Card/History/HistoryCard.css';
import Pagination from '@/composable/Pagination/Pagination';
import Spacer from '@/composable/Spacer/Spacer';
import OceanSwiper from '../../OceanSwiper/OceanSwiper';
import { gapStyle, slideStyle, topStyle } from './HistorySwiperSummary.css';

interface HistoryCardData extends HistoryCardContextProps {
  id: string;
}

interface Props {
  title: string;
  data: HistoryCardData[];
}

const HistorySwiperSummary = ({ title, data }: Props) => {
  return (
    <OceanSwiper>
      <OceanSwiper.Top className={topStyle}>
        <h2>{title}</h2>
        <Pagination
          length={data.length}
          selectedIdx={-1}
          wrapperGapClass={gapStyle}
          contentsWidthClass={historyCardWrapWidthStyle}
        />
      </OceanSwiper.Top>
      {/* TODO 반응형 */}
      <Spacer direction="horizontal" spacing="spacer-15" />
      <OceanSwiper.Main>
        <OceanSwiper.Slide>
          <div className={slideStyle}>
            {data.map((history) => (
              <HistoryCard
                key={history.id}
                companyName={history.companyName}
                period={history.period}
              >
                <HistoryCard.Company />
                <HistoryCard.Period />
              </HistoryCard>
            ))}
          </div>
        </OceanSwiper.Slide>
      </OceanSwiper.Main>
    </OceanSwiper>
  );
};

export default HistorySwiperSummary;
