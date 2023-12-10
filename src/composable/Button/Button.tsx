import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import { buttonVariants } from './Button.css';
import { getSpecificButtonStatus } from './helper/getSepcificButtonStatus';

interface Props {
  className?: string;
  size: 'M' | 'L';
  status?: 'DEFAULT' | 'HOVER' | 'PRESS';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  className,
  children,
  size,
  status = 'DEFAULT',
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      type="button"
      className={classNames(
        className,
        buttonVariants[size],
        fontVariants[size === 'M' ? 'GNB-m-medium' : 'paragraph-s-regular'],
        getSpecificButtonStatus?.(size, status),
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
