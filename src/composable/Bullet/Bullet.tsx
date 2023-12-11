import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import Text from '../Text/Text';
import { bulletStyle } from './Bullet.css';

const Bullet = ({ children }: PropsWithChildren) => {
  return (
    <Text
      as="span"
      className={classNames(bulletStyle, fontVariants['paragraph-m-bold'])}
    >
      {children}
    </Text>
  );
};

export default Bullet;
