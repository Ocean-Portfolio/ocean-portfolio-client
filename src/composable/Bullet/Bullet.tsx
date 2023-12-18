import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { colorVariants } from '@/styles/common/color.css';
import { bulletFontVariants, bulletVariants } from './Bullet.css';

const Bullet = ({
  className,
  children,
  sizeToken,
}: PropsWithChildren<{ className?: string; sizeToken: SizeToken }>) => {
  return (
    <span
      className={classNames(
        className,
        bulletVariants[sizeToken],
        bulletFontVariants[sizeToken],
        colorVariants['gray-scale-00'],
      )}
    >
      {children}
    </span>
  );
};

export default Bullet;
