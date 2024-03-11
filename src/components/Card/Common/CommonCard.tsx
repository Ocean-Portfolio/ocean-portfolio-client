import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { bgColorVariants, cardStyle } from './CommonCard.css';

interface Props {
  className?: string;
  bgColorToken: 'GRAY' | 'USER';
  onClick?: () => void;
}

const CommonCard = ({
  children,
  className,
  bgColorToken,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <article
      className={classNames(
        className,
        cardStyle,
        bgColorVariants[bgColorToken],
      )}
      onClick={onClick}
    >
      {children}
    </article>
  );
};

export default CommonCard;
