import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { getStaticContext } from '@/utils/context/StaticContext';
import CommonCard from '../Common/CommonCard';
import StaticContextHistoryCard, {
  HistoryCardContextProps,
} from './HistoryCard.context';
import {
  companyStyle,
  companyVariants,
  defaultCardWidthStyle,
  detailViewCardWidthStyle,
  periodStyle,
  periodVariants,
  wrapStyle,
  wrapVariants,
} from './HistoryCard.css';

export interface HistoryCardProps extends HistoryCardContextProps {
  className?: string;
  visible_status?: VisibleStatusToken;
  isDetailView?: boolean;
  onClick?: () => void;
}

const HistoryCard = ({
  className,
  children,
  visible_status,
  isDetailView,
  sizeToken,
  companyName,
  period,
  onClick,
}: PropsWithChildren<HistoryCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextHistoryCard.Provider
      value={{
        sizeToken,
        companyName,
        period,
      }}
    >
      <CommonCard
        as="button"
        className={classNames(
          className,
          sizeToken ? wrapVariants[sizeToken] : wrapStyle,
          isDetailView ? detailViewCardWidthStyle : defaultCardWidthStyle,
        )}
        bgColorToken="GRAY"
        onClick={onClick}
      >
        {children}
      </CommonCard>
    </StaticContextHistoryCard.Provider>
  );
};

const Company = () => {
  const { sizeToken, companyName } = getStaticContext(StaticContextHistoryCard);

  return (
    <p
      className={classNames(
        sizeToken ? companyVariants[sizeToken] : companyStyle,
      )}
    >
      {companyName}
    </p>
  );
};

const Period = () => {
  const { sizeToken, period } = getStaticContext(StaticContextHistoryCard);

  return (
    <p
      className={classNames(
        sizeToken ? periodVariants[sizeToken] : periodStyle,
      )}
    >
      {period}
    </p>
  );
};

HistoryCard.Company = Company;
HistoryCard.Period = Period;

export default HistoryCard;
