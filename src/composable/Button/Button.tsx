import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/common/font.css';
import { buttonVariants } from './Button.css';
import { getSpecificButtonStatus } from './helper/getSepcificButtonStatus';

interface Props {
  className?: string;
  size: 'M' | 'L';
  status?: 'DEFAULT' | 'HOVER' | 'PRESS';
  width?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  className,
  children,
  size,
  status = 'DEFAULT',
  width,
  style,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      type="button"
      className={classNames(
        className,
        buttonVariants[size],
        fontVariants[
          size === 'M' ? 'paragraph-m-medium' : 'paragraph-s-regular'
        ],
        getSpecificButtonStatus?.(size, status),
      )}
      onClick={onClick}
      style={{ ...style, width }}
    >
      {children}
    </button>
  );
};

export default Button;
