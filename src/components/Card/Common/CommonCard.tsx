import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Tag, { ExcludedTags } from '@/composable/Tag/Tag';
import { bgColorVariants, cardStyle } from './CommonCard.css';

interface Props {
  className?: string;
  as?: Exclude<keyof JSX.IntrinsicElements, ExcludedTags>;
  bgColorToken: 'GRAY' | 'USER';
  onClick?: () => void;
}

const CommonCard = ({
  children,
  as,
  className,
  bgColorToken,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <Tag
      as={as}
      className={classNames(
        className,
        cardStyle,
        bgColorVariants[bgColorToken],
      )}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default CommonCard;
