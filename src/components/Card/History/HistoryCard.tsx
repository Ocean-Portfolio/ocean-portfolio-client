import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { colorVariants } from '@/styles/common/color.css';
import { getStaticContext } from '@/utils/context/StaticContext';
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
      <div
        className={classNames(
          className,
          wrapStyle,
          sizeToken && wrapVariants[sizeToken],
        )}
      >
        {children}
      </div>
    </StaticContextHistoryCard.Provider>
  );
};

const Company = () => {
  const { sizeToken, companyName } = getStaticContext(StaticContextHistoryCard);

  return (
    <p
      className={classNames(
        companyStyle,
        sizeToken && companyVariants[sizeToken],
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
        periodStyle,
        sizeToken && periodVariants[sizeToken],
      )}
    >
      {period}
    </p>
  );
};

HistoryCard.Company = Company;
HistoryCard.Period = Period;

export default HistoryCard;
