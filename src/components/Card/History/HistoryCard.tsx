import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { colorVariants } from '@/styles/common/color.css';
import { getStaticContext } from '@/utils/context/StaticContext';
import StaticContextHistoryCard, {
  HistoryCardContextProps,
} from './HistoryCard.context';
import {
  companyVariants,
  periodVariants,
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
      <div className={classNames(className, wrapVariants[sizeToken])}>
        {children}
      </div>
    </StaticContextHistoryCard.Provider>
  );
};

const Company = () => {
  const { sizeToken, companyName } = getStaticContext(StaticContextHistoryCard);

  const getCompanyColor = (
    sizeToken: 'LARGE' | 'SMALL',
  ): UserColorThemeToken | GrayScaleToken => {
    switch (sizeToken) {
      case 'LARGE':
        return 'gray-scale-06';

      default:
        return 'primary-variant';
    }
  };

  return (
    <p
      className={classNames(
        companyVariants[sizeToken],
        colorVariants[getCompanyColor(sizeToken)],
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
        periodVariants[sizeToken],
        colorVariants['gray-scale-05'],
      )}
    >
      {period}
    </p>
  );
};

HistoryCard.Company = Company;
HistoryCard.Period = Period;

export default HistoryCard;
