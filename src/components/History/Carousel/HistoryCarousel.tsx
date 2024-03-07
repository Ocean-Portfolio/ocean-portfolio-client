'use client';

import React from 'react';
import { useSwiper } from 'swiper/react';
import HistoryDetailCard, {
  HistoryDetailCardProps,
} from '@/components/Card/History/Detail/HistoryDetailCard';
import HistoryImpactCard, {
  HistoryImpactCardProps,
} from '@/components/Card/History/Impact/HistoryImpactCard';
import OceanSwiper from '@/components/OceanSwiper/OceanSwiper';
import Button from '@/composable/Button/Button';
import CommonIcon from '@/composable/Icon/CommonIcon';
import Tab from '@/composable/Tab/Tab';
import useOceanSwiperButton from '@/hook/useOceanSwiperButton';
import { useOceanSwiperIndex } from '@/hook/useOceanSwiperIndex';
import {
  detailStyle,
  iconVariants,
  impactStyle,
  slideStyle,
  swiperWrapStyle,
  topStyle,
} from './HistoryCarousel.css';

// TODO : HistoryCarousel 컴포넌트를 구현합니다.
interface Props {
  data: {
    detail: HistoryDetailCardProps;
    impact: HistoryImpactCardProps[];
  }[];
}

const HistoryCarousel = ({ data }: Props) => {
  return (
    <OceanSwiper>
      <OceanSwiper.Main className={swiperWrapStyle} hiddenNavigation>
        <OceanSwiper.Top className={topStyle}>
          <HistoryCarousel.NavigateButton direction="PREV" />
          <HistoryCarousel.PaginateTab length={data.length} />
          <HistoryCarousel.NavigateButton direction="NEXT" />
        </OceanSwiper.Top>
        {data.map((item) => (
          <OceanSwiper.Slide className={slideStyle} key={item.detail.title}>
            <HistoryDetailCard
              className={detailStyle}
              title={item.detail.title}
              period={item.detail.period}
              position={item.detail.position}
              content={item.detail.content}
            >
              <HistoryDetailCard.Head />
              <HistoryDetailCard.Content />
            </HistoryDetailCard>
            {item.impact.map((impact, idx) => (
              <HistoryImpactCard
                key={idx}
                className={impactStyle}
                before={impact.before}
                after={impact.after}
                unitWord={impact.unitWord}
                content={impact.content}
              >
                <HistoryImpactCard.Headline />
                <HistoryImpactCard.Content />
              </HistoryImpactCard>
            ))}
          </OceanSwiper.Slide>
        ))}
      </OceanSwiper.Main>
    </OceanSwiper>
  );
};

interface PaginateTabProps {
  length: number;
}

const PaginateTab = ({ length }: PaginateTabProps) => {
  const { realIndex } = useOceanSwiperIndex();
  const swiper = useSwiper();

  return (
    <Tab
      length={length > 5 ? 5 : length}
      selectedIdx={realIndex}
      onClick={(currentIdx) => {
        console.log(swiper, 'swiper');
        swiper.slideTo(currentIdx);
      }}
    />
  );
};

interface NavigateButtonProps {
  direction: ButtonDirection;
}

const NavigateButton = ({ direction }: NavigateButtonProps) => {
  const { handleClick } = useOceanSwiperButton(direction);
  return (
    <Button as="button" type="button" onClick={handleClick}>
      <CommonIcon
        className={iconVariants[direction]}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        userToken="sungyeon"
        width={24}
        height={24}
      />
    </Button>
  );
};

HistoryCarousel.PaginateTab = PaginateTab;
HistoryCarousel.NavigateButton = NavigateButton;

export default HistoryCarousel;
