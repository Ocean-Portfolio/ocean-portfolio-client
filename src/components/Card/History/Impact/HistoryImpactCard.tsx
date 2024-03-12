'use client';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { StaticContextPageInfo } from '@/app/context';
import CommonIcon from '@/composable/Icon/CommonIcon';
import { useUserInfo } from '@/hook/useUserInfo';
import { getStaticContext } from '@/utils/context/StaticContext';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import CommonCard from '../../Common/CommonCard';
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
  wrapStyle,
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
  content,
}: PropsWithChildren<HistoryImpactCardProps>) => {
  return (
    <StaticContextHistoryImpactCard.Provider
      value={{
        sizeToken,
        before,
        after,
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
  const { sizeToken, before, after } = getStaticContext(
    StaticContextHistoryImpactCard,
  );

  const userInfo = useUserInfo();

  return (
    <h3
      className={classNames(
        sizeToken ? headlineStyleVariants[sizeToken] : headlineStyle,
      )}
    >
      <span>{before}</span>
      <CommonIcon
        className={classNames(
          sizeToken ? iconStyleVariants[sizeToken] : iconStyle,
        )}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        userToken={userInfo.name as UserNameToken}
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
