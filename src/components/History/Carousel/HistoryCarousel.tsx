'use client';

import React, { useEffect, useRef } from 'react';
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
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import { StaticContextUserInfo } from '@/Provider/UserInfoProvider.context';
import { getStaticContext } from '@/utils/context/StaticContext';
import { StaticContextHistoryCarousel } from './HistoryCarousel.context';
import {
  detailStyle,
  iconVariants,
  impactStyle,
  slideStyleVariants,
  topStyle,
} from './HistoryCarousel.css';

interface Props {
  data: {
    detail: HistoryDetailCardProps;
    impact: HistoryImpactCardProps[];
  }[];
}

const HistoryCarousel = ({ data }: Props) => {
  return (
    <StaticContextHistoryCarousel.Provider
      value={{ tabRef: { current: null } }}
    >
      {data.length !== 0 && (
        <OceanSwiper>
          <OceanSwiper.Top className={topStyle}>
            <HistoryCarousel.NavigateButton direction="PREV" />
            <HistoryCarousel.DisplayTab length={data.length} />
            <HistoryCarousel.NavigateButton direction="NEXT" />
          </OceanSwiper.Top>
          <OceanSwiper.Main hiddenNavigation overflowVisible={false}>
            <HistoryCarousel.PaginateTab length={data.length} />

            {data.map((item) => (
              <OceanSwiper.Slide
                className={slideStyleVariants[item.impact.length as 0 | 1 | 2]}
                key={item.detail.title}
              >
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
      )}
    </StaticContextHistoryCarousel.Provider>
  );
};

interface PaginateTabProps {
  length: number;
}

const PaginateTab = ({ length }: PaginateTabProps) => {
  const { tabRef } = getStaticContext(StaticContextHistoryCarousel);
  const { realIndex } = useOceanSwiperIndex();
  const swiper = useSwiper();
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = (currentIdx: number) => swiper.slideTo(currentIdx);

  useEffect(() => {
    tabRef.current = divRef.current;

    return () => {
      tabRef.current = null;
    };
  }, []);
  return (
    <Tab
      hidden
      wrapRef={divRef}
      length={length > 5 ? 5 : length}
      selectedIdx={realIndex}
      onClick={handleClick}
    />
  );
};

const DisplayTab = ({ length }: PaginateTabProps) => {
  const { tabRef } = getStaticContext(StaticContextHistoryCarousel);
  const { realIndex } = useOceanSwiperIndex();

  return (
    <Tab
      length={length > 5 ? 5 : length}
      selectedIdx={realIndex}
      onClick={(currentIdx) => {
        const div = tabRef.current as HTMLDivElement;

        (div.children[currentIdx] as HTMLDivElement).click();
      }}
    />
  );
};
interface NavigateButtonProps {
  direction: ButtonDirection;
}

const NavigateButton = ({ direction }: NavigateButtonProps) => {
  const { breakpointS } = useODSBreakPoints();
  const { handleClick } = useOceanSwiperButton(direction);
  const { name } = getStaticContext(StaticContextUserInfo);
  if (breakpointS) return null;

  return (
    <Button as="button" type="button" onClick={handleClick}>
      <CommonIcon
        className={iconVariants[direction]}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        // TODO: userToken을 받아오는 방법을 고민해보세요.
        userToken={name}
        width={24}
        height={24}
      />
    </Button>
  );
};

HistoryCarousel.DisplayTab = DisplayTab;
HistoryCarousel.PaginateTab = PaginateTab;
HistoryCarousel.NavigateButton = NavigateButton;

export default HistoryCarousel;
