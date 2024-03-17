'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import HistoryCard from '@/components/Card/History/HistoryCard';
import { HistoryCardContextProps } from '@/components/Card/History/HistoryCard.context';
import { historyCardWrapWidthStyle } from '@/components/Card/History/HistoryCard.css';
import Button from '@/composable/Button/Button';
import CommonIcon from '@/composable/Icon/CommonIcon';
import Pagination from '@/composable/Pagination/Pagination';
import Spacer from '@/composable/Spacer/Spacer';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import { getStaticContext } from '@/utils/context/StaticContext';
import OceanSwiper from '../../OceanSwiper/OceanSwiper';
import {
  HistorySummaryContextProps,
  StaticContextHistorySummary,
} from './HistorySummary.context';
import {
  buttonStyle,
  iconStyle,
  iconStyleVariants,
  swiperTitleStyle,
  listTitleStyle,
  listBundleStyle,
  listWrapStyle,
  swiperMainStyle,
  swiperWrapStyle,
  swiperItemStyle,
  barWidthStyle,
} from './HistorySummary.css';
export interface HistoryCardData extends HistoryCardContextProps {
  id: string;
}

export interface HistorySummaryProps extends HistorySummaryContextProps {}

const HistorySummary = ({
  children,
  summary_id,
  title,
  data,
  isDetailView,
  selectIndex,
  handleClick,
}: PropsWithChildren<HistorySummaryProps>) => {
  return (
    <StaticContextHistorySummary.Provider
      value={{
        summary_id,
        title,
        data,
        isDetailView,
        selectIndex,
        handleClick,
      }}
    >
      {children}
    </StaticContextHistorySummary.Provider>
  );
};

const List = ({ children }: PropsWithChildren) => {
  const { isDetailView, title, data, selectIndex, summary_id, handleClick } =
    getStaticContext(StaticContextHistorySummary);
  const [isOpen, setIsOpen] = useState(isDetailView);
  const displayData = isOpen === false ? data.slice(0, 2) : data;

  return (
    <div className={listWrapStyle} suppressHydrationWarning>
      <h2 className={listTitleStyle}>{title}</h2>
      {displayData.map((history, idx) => {
        return (
          <OceanSwiper.Slide key={history.id} className={listBundleStyle}>
            <HistoryCard
              companyName={history.companyName}
              period={history.period}
              onClick={() => {
                if (handleClick) handleClick(history.id, summary_id, idx);
              }}
            >
              <HistoryCard.Company />
              <HistoryCard.Period />
            </HistoryCard>
            {selectIndex === idx && children}
          </OceanSwiper.Slide>
        );
      })}
      {isOpen && <Spacer direction="horizontal" spacing="spacer-075" />}
      {isOpen && <Spacer direction="horizontal" spacing="spacer-15" />}
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
    </div>
  );
};

const Swipe = () => {
  const { isDetailView, title, data, selectIndex } = getStaticContext(
    StaticContextHistorySummary,
  );
  const { breakpointM, breakpointXXL } = useODSBreakPoints();
  const { handleClick, summary_id } = getStaticContext(
    StaticContextHistorySummary,
  );

  return (
    <OceanSwiper className={swiperWrapStyle}>
      <OceanSwiper.Top>
        {!isDetailView && (
          <h2 className={swiperTitleStyle}>{title.toUpperCase()}</h2>
        )}
      </OceanSwiper.Top>
      <OceanSwiper.Main className={swiperMainStyle} perView={'auto'}>
        {data.map((history, idx) => {
          return (
            <OceanSwiper.Slide key={history.id} className={swiperItemStyle}>
              {isDetailView && <Spacer spacing="spacer-025" />}
              <Pagination
                length={1}
                isSelected={
                  typeof selectIndex === 'number' ? selectIndex === idx : false
                }
                barWidthClass={barWidthStyle}
                contentsWidthClass={historyCardWrapWidthStyle}
                onClick={() => {
                  if (handleClick) handleClick(data[idx].id, summary_id, idx);
                }}
              />
              <Spacer
                direction="horizontal"
                spacing={breakpointM ? 'spacer-075' : 'spacer-15'}
              />
              <HistoryCard
                companyName={history.companyName}
                period={history.period}
                onClick={() => {
                  if (handleClick) handleClick(history.id, summary_id, idx);
                }}
              >
                <HistoryCard.Company />
                <HistoryCard.Period />
              </HistoryCard>
            </OceanSwiper.Slide>
          );
        })}
      </OceanSwiper.Main>
      {!isDetailView && breakpointXXL && (
        <Spacer direction="horizontal" spacing="spacer-20" />
      )}
    </OceanSwiper>
  );
};

HistorySummary.List = List;
HistorySummary.Swipe = Swipe;

export default HistorySummary;
