import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/common/font.css';
import Text from '../Text/Text';
import { bulletStyle } from './Bullet.css';

const Bullet = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <Text
      as="span"
      className={classNames(
        bulletStyle,
        fontVariants['paragraph-m-bold'],
        className,
      )}
    >
      {children}
    </Text>
  );
};

export default Bullet;
