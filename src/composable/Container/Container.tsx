import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Tag, { TagProps } from '../Tag/Tag';
import { containerStyle } from './Container.css';

interface Props extends TagProps {}

const Container = ({
  children,
  className,
  as,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Tag
      as={as || 'div'}
      className={classNames(containerStyle, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Container;
