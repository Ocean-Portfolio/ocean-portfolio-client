import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { colorVariants } from '@/styles/color.css';
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
  colorThemeToken: ColorThemeToken;
  sizeToken: 'LARGE' | 'SMALL';
}

const HistoryCard = ({
  className,
  children,
  visible_status,
  colorThemeToken,
  sizeToken,
}: PropsWithChildren<HistoryCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextHistoryCard.Provider
      value={{
        sizeToken,
        colorThemeToken,
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
  const { sizeToken, colorThemeToken } = getStaticContext(
    StaticContextHistoryCard,
  );

  const getCompanyColor = (colorThemeToken: ColorThemeToken): ODSColorToken => {
    switch (colorThemeToken) {
      case 'sungyeon': {
        if (sizeToken === 'LARGE') return 'gray-scale-06';
        return 'sungyeon-primary-200';
      }
      default:
        return 'gray-scale-06';
    }
  };

  return (
    <p
      className={classNames(
        companyVariants[sizeToken],
        colorVariants[getCompanyColor(colorThemeToken)],
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
  const { sizeToken, colorThemeToken } = getStaticContext(
    StaticContextHistoryCard,
  );

  const getPeriodColor = (colorThemeToken: ColorThemeToken): ODSColorToken => {
    switch (colorThemeToken) {
      case 'sungyeon': {
        return 'gray-scale-05';
      }
      default:
        return 'gray-scale-05';
    }
  };

  return (
    <p
      className={classNames(
        periodVariants[sizeToken],
        colorVariants[getPeriodColor(colorThemeToken)],
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
