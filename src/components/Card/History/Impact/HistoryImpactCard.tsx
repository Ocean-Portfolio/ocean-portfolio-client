import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { StaticContextPageInfo } from '@/app/context';
import CommonIcon from '@/composable/Icon/CommonIcon';
import { getStaticContext } from '@/utils/context/StaticContext';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import CommonCard from '../../Common/CommonCard';
import { wrapStyle } from '../HistoryCard.css';
import {
  HistoryImpactContextProps,
  StaticContextHistoryImpactCard,
} from './HistoryImpactCard.context';
import {
  contentStyle,
  contentStyleVariants,
  headlineStyle,
  headlineStyleVariants,
  iconStyle,
  iconStyleVariants,
  strongStyle,
  strongStyleVariants,
  strongWrapStyle,
  wrapStyleVariants,
} from './HistoryImpactCard.css';

export interface HistoryImpactCardProps extends HistoryImpactContextProps {
  className?: string;
}

const HistoryImpactCard = ({
  className,
  children,
  sizeToken,
  before,
  after,
  unitWord,
  content,
}: PropsWithChildren<HistoryImpactCardProps>) => {
  return (
    <StaticContextHistoryImpactCard.Provider
      value={{
        sizeToken,
        before,
        after,
        unitWord,
        content,
      }}
    >
      <CommonCard
        className={classNames(
          className,
          sizeToken ? wrapStyleVariants[sizeToken] : wrapStyle,
        )}
        bgColorToken="USER"
      >
        {children}
      </CommonCard>
    </StaticContextHistoryImpactCard.Provider>
  );
};

const Headline = () => {
  const { userInfo } = getStaticContext(StaticContextPageInfo);
  const { sizeToken, before, after, unitWord } = getStaticContext(
    StaticContextHistoryImpactCard,
  );
  return (
    <h3
      className={classNames(
        sizeToken ? headlineStyleVariants[sizeToken] : headlineStyle,
      )}
    >
      <span>
        {before}
        {unitWord}
      </span>
      <CommonIcon
        className={classNames(
          sizeToken ? iconStyleVariants[sizeToken] : iconStyle,
        )}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        userToken={userInfo.token}
        width={calcRemToPxNumber('1.5rem')}
        height={calcRemToPxNumber('1.5rem')}
      />
      <span className={strongWrapStyle}>
        <strong
          className={classNames(
            sizeToken ? strongStyleVariants[sizeToken] : strongStyle,
          )}
        >
          {after}
        </strong>
        {unitWord}
      </span>
    </h3>
  );
};

const Content = () => {
  const { sizeToken, content } = getStaticContext(
    StaticContextHistoryImpactCard,
  );
  return (
    <pre className={sizeToken ? contentStyleVariants[sizeToken] : contentStyle}>
      {content}
    </pre>
  );
};

HistoryImpactCard.Headline = Headline;
HistoryImpactCard.Content = Content;

export default HistoryImpactCard;
