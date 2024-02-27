import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { bgColorVariants, cardStyle } from './CommonCard.css';

interface Props {
  className?: string;
  bgColorToken: 'GRAY' | 'USER';
}

const CommonCard = ({
  children,
  className,
  bgColorToken,
}: PropsWithChildren<Props>) => {
  return (
    <article
      className={classNames(
        className,
        cardStyle,
        bgColorVariants[bgColorToken],
      )}
    >
      {children}
    </article>
  );
};

export default CommonCard;
