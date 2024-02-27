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
  periodStyle,
  periodVariants,
  wrapStyle,
  wrapVariants,
} from './HistoryCard.css';

export interface HistoryCardProps extends HistoryCardContextProps {
  className?: string;
  visible_status: VisibleStatusToken;
}

const HistoryCard = ({
  className,
  children,
  visible_status,
  sizeToken,
  companyName,
  period,
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
        className={classNames(
          className,
          sizeToken ? wrapVariants[sizeToken] : wrapStyle,
        )}
        bgColorToken="GRAY"
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
