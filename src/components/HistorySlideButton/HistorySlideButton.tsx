'use client';

import React from 'react';
import CommonIcon from '@/composable/Icon/CommonIcon';
import useOceanSwiperButton from '../../hook/useOceanSwiperButton';
import { iconVariants } from './HistorySlideButton.css';

interface Props {
  direction: ButtonDirection;
}

const HistorySlideButton = ({ direction }: Props) => {
  const { handleClick } = useOceanSwiperButton(direction);
  return (
    <button type="button" onClick={handleClick}>
      <CommonIcon
        className={iconVariants[direction]}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        userToken="sungyeon"
        width={24}
        height={24}
      />
    </button>
  );
};

export default HistorySlideButton;
