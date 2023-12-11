import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import Text from '../Text/Text';
import { chipStyle } from './Chip.css';

const Chip = ({ children }: PropsWithChildren) => {
  return (
    <Text
      as="span"
      className={classNames(chipStyle, fontVariants['caption-m-semibold'])}
    >
      {children}
    </Text>
  );
};

export default Chip;
