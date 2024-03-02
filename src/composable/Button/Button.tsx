import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Tag from '../Tag/Tag';
import { buttonStyle } from './Button.css';

interface Props {
  className?: string;
  as: 'button' | 'a';
  type?: 'button' | 'submit';
  href?: string;
  width?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({
  className,
  children,
  as = 'button',
  type = 'button',
  href,
  width,
  style,
  onClick,
  onSubmit,
}: PropsWithChildren<Props>) => {
  return (
    <Tag
      className={classNames(className, buttonStyle)}
      style={{ ...style, width }}
      as={as}
      href={href}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </Tag>
  );
};

export default Button;
