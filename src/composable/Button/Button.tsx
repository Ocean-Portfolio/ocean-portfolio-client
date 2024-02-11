import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/common/font.css';
import Tag from '../Tag/Tag';
import { buttonVariants } from './Button.css';
import { getSpecificButtonStatus } from './helper/getSepcificButtonStatus';

interface Props {
  className?: string;
  size: 'M' | 'L';
  as: 'button' | 'a';
  href?: string;
  status?: 'DEFAULT' | 'HOVER' | 'PRESS';
  width?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  className,
  children,
  as,
  href,
  size,
  status = 'DEFAULT',
  width,
  style,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <Tag
      type="button"
      as={as}
      href={href}
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
    </Tag>
  );
};

export default Button;
