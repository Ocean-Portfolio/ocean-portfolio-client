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
import { getStaticContext } from '@/utils/context/StaticContext';
import OceanSwiper from '../../OceanSwiper/OceanSwiper';
import {
  HistorySummaryContextProps,
  StaticContextHistorySummary,
} from './HistorySummary.context';
import {
  buttonStyle,
  gapStyle,
  iconStyle,
  iconStyleVariants,
  bundleStyle,
  swiperTopStyle,
  swiperTitleStyle,
  listTitleStyle,
  listBundleStyle,
  listWrapStyle,
  swiperWrapVariants,
} from './HistorySummary.css';

export interface HistoryCardData extends HistoryCardContextProps {
  id: string;
}

interface CommonProps extends HistorySummaryContextProps {
  title: string;
  data: HistoryCardData[];
  isDetailView?: boolean;
  selectIndex?: number;
}

const HistorySummary = ({
  summary_id,
  title,
  data,
  isDetailView,
  selectIndex,
  handleClick,
}: CommonProps) => {
  const { breakpointS } = useODSBreakPoints();

  return (
    <StaticContextHistorySummary.Provider
      value={{
        handleClick,
        summary_id,
      }}
    >
      {breakpointS && (
        <HistorySummary.List
          title={title}
          data={data}
          isDetailView={isDetailView}
          selectIndex={selectIndex}
        />
      )}
      {!breakpointS && (
        <HistorySummary.Swiper
          title={title}
          data={data}
          isDetailView={isDetailView}
          selectIndex={selectIndex}
        />
      )}
    </StaticContextHistorySummary.Provider>
  );
};

const Swiper = ({
  title,
  data,
  isDetailView,
  selectIndex,
}: Omit<CommonProps, 'summary_id'>) => {
  const { breakpointM, breakpointL, breakpointXXL } = useODSBreakPoints();

  const maxDisplayLength = breakpointL ? 3 : 4;

  const nestedData = createNestedArray(data, breakpointL ? 3 : 4);

  return (
    <OceanSwiper>
      <OceanSwiper.Top className={swiperTopStyle}>
        {!isDetailView && <h2 className={swiperTitleStyle}>{title}</h2>}
        <Pagination
          length={
            data.length > maxDisplayLength ? maxDisplayLength : data.length
          }
          selectedIdx={typeof selectIndex === 'number' ? selectIndex : -1}
          wrapperGapClass={gapStyle}
          contentsWidthClass={historyCardWrapWidthStyle}
        />
      </OceanSwiper.Top>
      <Spacer
        direction="horizontal"
        spacing={breakpointM ? 'spacer-075' : 'spacer-15'}
      />
      <OceanSwiper.Main className={swiperWrapVariants[maxDisplayLength]}>
        {nestedData.map((bundle, idx) => (
          <OceanSwiper.Slide key={idx}>
            <HistorySummary.Bundle data={bundle} />
          </OceanSwiper.Slide>
        ))}
      </OceanSwiper.Main>
      {breakpointXXL && <Spacer direction="horizontal" spacing="spacer-20" />}
    </OceanSwiper>
  );
};

const List = ({
  children,
  title,
  data,
  isDetailView,
  selectIndex,
}: PropsWithChildren<Omit<CommonProps, 'summary_id'>>) => {
  const [isOpen, setIsOpen] = useState(isDetailView);
  const displayData = isOpen === false ? data.slice(0, 2) : data;
  return (
    <div className={listWrapStyle}>
      <h2 className={listTitleStyle}>{title}</h2>
      <HistorySummary.Bundle
        className={listBundleStyle}
        data={displayData}
        selectIndex={selectIndex}
      >
        {isDetailView && children}
      </HistorySummary.Bundle>
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

interface BundleProps {
  className?: string;
  data: HistoryCardData[];
  selectIndex?: number;
}

const Bundle = ({
  children,
  className,
  data,
  selectIndex,
}: PropsWithChildren<BundleProps>) => {
  const { handleClick, summary_id } = getStaticContext(
    StaticContextHistorySummary,
  );

  return (
    <div className={classNames(bundleStyle, className)}>
      {data.map((history, idx) => {
        return (
          <Fragment key={history.id}>
            <HistoryCard
              companyName={history.companyName}
              period={history.period}
              onClick={() => {
                if (handleClick) handleClick(history.id, summary_id);
              }}
            >
              <HistoryCard.Company />
              <HistoryCard.Period />
            </HistoryCard>
            {selectIndex === idx && children}
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
