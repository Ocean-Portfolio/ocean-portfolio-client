'use client';

import 'swiper/css';

import classNames from 'classnames';
import React, { useState } from 'react';
import HistoryCard from '@/components/Card/History/HistoryCard';
import { HistoryCardContextProps } from '@/components/Card/History/HistoryCard.context';
import { historyCardWrapWidthStyle } from '@/components/Card/History/HistoryCard.css';
import Button from '@/composable/Button/Button';
import CommonIcon from '@/composable/Icon/CommonIcon';
import Pagination from '@/composable/Pagination/Pagination';
import Spacer from '@/composable/Spacer/Spacer';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import { createNestedArray } from '@/utils/array/createNestedArray';
import OceanSwiper from '../../OceanSwiper/OceanSwiper';
import {
  buttonStyle,
  gapStyle,
  iconStyle,
  iconStyleVariants,
  mainWrapStyle,
  slideStyle,
  titleStyle,
  topStyle,
} from './HistorySwiperSummary.css';

interface HistoryCardData extends HistoryCardContextProps {
  id: string;
}

interface Props {
  title: string;
  data: HistoryCardData[];
}
// TODO : Item 하나 클릭해서 자세히보기 상태로 전환
// TODO : swiper overflow - fit-content 구현하기
const HistorySwiperSummary = ({ title, data }: Props) => {
  return (
    <OceanSwiper>
      <OceanSwiper.Top className={topStyle}>
        <h2 className={titleStyle}>{title}</h2>
        <HistorySwiperSummary.Top data={data} />
      </OceanSwiper.Top>
      <HistorySwiperSummary.Spacing />
      <HistorySwiperSummary.Slider data={data} />
    </OceanSwiper>
  );
};

interface TopProps {
  data: HistoryCardData[];
}

const Top = ({ data }: TopProps) => {
  const { breakpointS, breakpointL } = useODSBreakPoints();
  const maxDisplayLength = breakpointL ? 3 : 4;
  return (
    <>
      {!breakpointS && (
        <Pagination
          length={
            data.length > maxDisplayLength ? maxDisplayLength : data.length
          }
          selectedIdx={-1}
          wrapperGapClass={gapStyle}
          contentsWidthClass={historyCardWrapWidthStyle}
        />
      )}
    </>
  );
};

interface SliderProps {
  data: HistoryCardData[];
}

const Slider = ({ data }: SliderProps) => {
  const { breakpointS, breakpointL } = useODSBreakPoints();
  const nestedData = breakpointS
    ? new Array(data)
    : createNestedArray(data, breakpointL ? 3 : 4);
  return (
    <OceanSwiper.Main className={mainWrapStyle} isSwipeAble={!breakpointS}>
      {nestedData.map((bundle, idx) => (
        <OceanSwiper.Slide key={idx}>
          <HistorySwiperSummary.Items data={bundle} />
        </OceanSwiper.Slide>
      ))}
    </OceanSwiper.Main>
  );
};

interface ItemsProps {
  data: HistoryCardData[];
}

const Items = ({ data }: ItemsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { breakpointS } = useODSBreakPoints();
  const displayData = breakpointS && isOpen === false ? data.slice(0, 2) : data;
  return (
    <div
      className={classNames(
        slideStyle,
        // breakpointS && slideVariants[isOpen ? 'OPEN' : 'CLOSE'],
      )}
    >
      {displayData.map((history) => (
        <HistoryCard
          key={history.id}
          companyName={history.companyName}
          period={history.period}
        >
          <HistoryCard.Company />
          <HistoryCard.Period />
        </HistoryCard>
      ))}
      {breakpointS && (
        <Button
          className={buttonStyle}
          as="button"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <CommonIcon
            className={classNames(
              iconStyle,
              iconStyleVariants[isOpen ? 'OPEN' : 'CLOSE'],
            )}
            variant="LEFT_ARROW_SECONDARY_VARIANT"
            width={21.33333}
            height={24}
          />
        </Button>
      )}
    </div>
  );
};

const Spacing = () => {
  const { breakpointS, breakpointM } = useODSBreakPoints();

  if (breakpointS) return null;

  return (
    <Spacer
      direction="horizontal"
      spacing={breakpointM ? 'spacer-075' : 'spacer-15'}
    />
  );
};

HistorySwiperSummary.Top = Top;
HistorySwiperSummary.Slider = Slider;
HistorySwiperSummary.Items = Items;
HistorySwiperSummary.Spacing = Spacing;

export default HistorySwiperSummary;
