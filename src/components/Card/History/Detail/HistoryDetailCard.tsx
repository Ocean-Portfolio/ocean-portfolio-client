import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import MarkdownViewer from '@/components/MarkdownViewer/MarkdownViewer';
import { getStaticContext } from '@/utils/context/StaticContext';
import CommonCard from '../../Common/CommonCard';
import StaticContextHistoryDetailCard, {
  HistoryDetailContextProps,
} from './HistoryDetailCard.context';
import {
  contentSelector,
  contentStyle,
  contentVariants,
  headStyle,
  headVariants,
  periodStyle,
  periodVariants,
  positionStyle,
  positionVariants,
  titleStyle,
  titleVariants,
  wrapStyle,
  wrapVariants,
} from './HistoryDetailCard.css';

export interface HistoryDetailCardProps extends HistoryDetailContextProps {
  className?: string;
  visible_status?: VisibleStatusToken;
}

const HistoryDetailCard = ({
  className,
  children,
  visible_status,
  sizeToken,
  title,
  period,
  position,
  content,
}: PropsWithChildren<HistoryDetailCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextHistoryDetailCard.Provider
      value={{
        sizeToken,
        title,
        period,
        position,
        content,
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
    </StaticContextHistoryDetailCard.Provider>
  );
};

const Head = () => {
  const { sizeToken, title, period, position } = getStaticContext(
    StaticContextHistoryDetailCard,
  );

  return (
    <div
      className={classNames(sizeToken ? headVariants[sizeToken] : headStyle)}
    >
      <h3
        className={classNames(
          sizeToken ? titleVariants[sizeToken] : titleStyle,
        )}
      >
        {title}
      </h3>
      <p
        className={classNames(
          sizeToken ? periodVariants[sizeToken] : periodStyle,
        )}
      >
        {period}
      </p>
      <p
        className={classNames(
          sizeToken ? positionVariants[sizeToken] : positionStyle,
        )}
      >
        {position}
      </p>
    </div>
  );
};

const Content = () => {
  const { sizeToken, content } = getStaticContext(
    StaticContextHistoryDetailCard,
  );

  return (
    <MarkdownViewer
      className={classNames(
        sizeToken ? contentVariants[sizeToken] : contentStyle,
        contentSelector,
      )}
      value={content || ''}
    />
  );
};

HistoryDetailCard.Head = Head;
HistoryDetailCard.Content = Content;

export default HistoryDetailCard;
