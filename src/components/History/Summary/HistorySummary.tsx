'use client';

import 'swiper/css';

import classNames from 'classnames';
import React, { Fragment, PropsWithChildren, useState } from 'react';
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
  bundleStyle,
  swiperTopStyle,
  swiperTitleStyle,
  listTitleStyle,
  listBundleStyle,
  listWrapStyle,
} from './HistorySummary.css';

interface HistoryCardData extends HistoryCardContextProps {
  id: string;
}

interface Props {
  title: string;
  data: HistoryCardData[];
  isDetailView: boolean;
  insertIndex?: number;
}
// TODO : swiper overflow - fit-content 구현하기
const HistorySummary = ({ title, data, isDetailView, insertIndex }: Props) => {
  const { breakpointS } = useODSBreakPoints();

  if (breakpointS)
    return (
      <HistorySummary.List
        title={title}
        data={data}
        isDetailView={isDetailView}
        insertIndex={insertIndex}
      />
    );

  return (
    <HistorySummary.Swiper
      title={title}
      data={data}
      isDetailView={isDetailView}
    />
  );
};

const Swiper = ({ title, data, isDetailView }: Props) => {
  const { breakpointS, breakpointM, breakpointL } = useODSBreakPoints();

  const maxDisplayLength = breakpointL ? 3 : 4;

  const nestedData = breakpointS
    ? new Array(data)
    : createNestedArray(data, breakpointL ? 3 : 4);

  return (
    <OceanSwiper>
      <OceanSwiper.Top className={swiperTopStyle}>
        {!isDetailView && <h2 className={swiperTitleStyle}>{title}</h2>}
        <Pagination
          length={
            data.length > maxDisplayLength ? maxDisplayLength : data.length
          }
          selectedIdx={-1}
          wrapperGapClass={gapStyle}
          contentsWidthClass={historyCardWrapWidthStyle}
        />
      </OceanSwiper.Top>
      <Spacer
        direction="horizontal"
        spacing={breakpointM ? 'spacer-075' : 'spacer-15'}
      />
      <OceanSwiper.Main className={mainWrapStyle} isSwipeAble={!breakpointS}>
        {nestedData.map((bundle, idx) => (
          <OceanSwiper.Slide key={idx}>
            <HistorySummary.Bundle data={bundle} />
          </OceanSwiper.Slide>
        ))}
      </OceanSwiper.Main>
    </OceanSwiper>
  );
};

const List = ({
  children,
  title,
  data,
  isDetailView,
  insertIndex,
}: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(isDetailView);
  const displayData = isOpen === false ? data.slice(0, 2) : data;
  return (
    <div className={listWrapStyle}>
      <h2 className={listTitleStyle}>{title}</h2>
      <HistorySummary.Bundle
        className={listBundleStyle}
        data={displayData}
        insertIndex={insertIndex}
      >
        {children}
      </HistorySummary.Bundle>
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

interface BundleProps {
  className?: string;
  data: HistoryCardData[];
  insertIndex?: number;
}

const Bundle = ({
  children,
  className,
  data,
  insertIndex,
}: PropsWithChildren<BundleProps>) => {
  return (
    <div className={classNames(bundleStyle, className)}>
      {data.map((history, idx) => {
        return (
          <Fragment key={history.id}>
            <HistoryCard
              companyName={history.companyName}
              period={history.period}
            >
              <HistoryCard.Company />
              <HistoryCard.Period />
            </HistoryCard>
            {insertIndex === idx && children}
          </Fragment>
        );
      })}
    </div>
  );
};

HistorySummary.Swiper = Swiper;
HistorySummary.List = List;
HistorySummary.Bundle = Bundle;

export default HistorySummary;