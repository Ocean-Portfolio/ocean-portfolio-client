import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { colorVariants } from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
import { getStaticContext } from '@/utils/context/StaticContext';
import StaticContextHistoryDetailCard from './HistoryDetailCard.context';
import { titleVariants, wrapVariants } from './HistoryDetailCard.css';

// 스토리북, 테스트코드 추가해야함

interface HistoryDetailCardProps {
  className?: string;
  visible_status: VisibleStatusToken;
  sizeToken: HistoryItemCardSizeToken;
}

const HistoryDetailCard = ({
  className,
  children,
  visible_status,
  sizeToken,
}: PropsWithChildren<HistoryDetailCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextHistoryDetailCard.Provider
      value={{
        sizeToken,
      }}
    >
      <article className={classNames(className, wrapVariants[sizeToken])}>
        {children}
      </article>
    </StaticContextHistoryDetailCard.Provider>
  );
};

interface TitleProps {
  title: string;
  period: string;
}

const Title = ({ title, period }: TitleProps) => {
  const { sizeToken } = getStaticContext(StaticContextHistoryDetailCard);

  return (
    <div className={classNames(titleVariants[sizeToken])}>
      <h3
        className={classNames(
          colorVariants['gray-scale-06'],
          fontVariants['GNB-l-bold'],
        )}
      >
        {title}
      </h3>
      <p
        className={classNames(
          colorVariants['primary-variant'],
          fontVariants['title-s-semibold'],
        )}
      >
        {period}
      </p>
    </div>
  );
};

interface DescriptionProps {
  content: string;
}

const Description = ({ content }: DescriptionProps) => {
  const { sizeToken } = getStaticContext(StaticContextHistoryDetailCard);

  // fontVariants['display-s-medium'],
  // 세부 디자인 결정되면 사이즈별 타이포그래피 적용 필요

  return (
    <pre className={classNames(colorVariants['gray-scale-06'])}>{content}</pre>
  );
};

HistoryDetailCard.Title = Title;
HistoryDetailCard.Description = Description;

export default HistoryDetailCard;
