import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { colorVariants } from '@/styles/common/color.css';
import { getStaticContext } from '@/utils/context/StaticContext';
import StaticContextHistoryCard from './HistoryCard.context';
import {
  companyVariants,
  periodVariants,
  wrapVariants,
} from './HistoryCard.css';

export interface HistoryCardProps {
  className?: string;
  visible_status: VisibleStatusToken;
  sizeToken: 'LARGE' | 'SMALL';
}

const HistoryCard = ({
  className,
  children,
  visible_status,
  sizeToken,
}: PropsWithChildren<HistoryCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextHistoryCard.Provider
      value={{
        sizeToken,
      }}
    >
      <div className={classNames(className, wrapVariants[sizeToken])}>
        {children}
      </div>
    </StaticContextHistoryCard.Provider>
  );
};

interface CompanyProps {
  companyName: string;
}

const Company = ({ companyName }: CompanyProps) => {
  const { sizeToken } = getStaticContext(StaticContextHistoryCard);

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

interface PositionProps {
  positionName: string;
}

const Position = ({ positionName }: PositionProps) => {
  return <p>{positionName}</p>;
};

interface PeriodProps {
  period: string;
}

const Period = ({ period }: PeriodProps) => {
  const { sizeToken } = getStaticContext(StaticContextHistoryCard);

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
HistoryCard.Position = Position;
HistoryCard.Period = Period;

export default HistoryCard;
