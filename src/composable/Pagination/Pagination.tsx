'use client';

import { useTransition, animated } from '@react-spring/web';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import { globalFadeIn } from '@/styles/animation/fade.css';
import Button from '../Button/Button';
import CommonIcon from '../Icon/CommonIcon';
import {
  barStyle,
  barStyleVariants,
  buttonAnchorStyle,
  buttonAnchorStyleVariants,
  buttonStyle,
  buttonStyleVariants,
  iconStyle,
  wrapStyle,
  wrapStyleVariants,
} from './Pagination.css';

type PaginationSizeTokens = 'XLARGE' | 'LARGE' | 'MEDIUM';

export interface PaginationProps {
  sizeToken?: PaginationSizeTokens;
  selectedIdx: number;
  onClick: (currentIdx: number) => void;
  length: number;
}

const Pagination = ({
  sizeToken,
  length,
  selectedIdx,
  onClick,
}: PropsWithChildren<PaginationProps>) => {
  return (
    <div className={sizeToken ? wrapStyleVariants[sizeToken] : wrapStyle}>
      <Pagination.Bar sizeToken={sizeToken} />
      {Array.from({ length }).map((_, idx) => (
        <Pagination.Point
          sizeToken={sizeToken}
          key={idx}
          idx={idx}
          isSelected={idx === selectedIdx}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

interface BarProps {
  sizeToken?: PaginationSizeTokens;
}

const Bar = ({ sizeToken }: BarProps) => {
  return <hr className={sizeToken ? barStyleVariants[sizeToken] : barStyle} />;
};

interface PointProps {
  sizeToken?: PaginationSizeTokens;
  idx: number;
  isSelected: boolean;
  onClick: (currentIdx: number) => void;
}

const Point = ({ sizeToken, idx, isSelected, onClick }: PointProps) => {
  const { breakpointL } = useODSBreakPoints();

  const handleClick = () => {
    onClick(idx);
  };

  const unSelectedSize =
    breakpointL || sizeToken === 'LARGE' || sizeToken === 'MEDIUM' ? 8 : 12;
  const unSelectedIcon =
    breakpointL || sizeToken === 'LARGE' || sizeToken === 'MEDIUM'
      ? 'PAGINATION_UNSELECTED_SKY_BLUE_MEDIUM'
      : 'PAGINATION_UNSELECTED_SKY_BLUE_LARGE';

  const selectedSize =
    breakpointL || sizeToken === 'LARGE' || sizeToken === 'MEDIUM' ? 40 : 44;
  const selectedIcon =
    breakpointL || sizeToken === 'LARGE' || sizeToken === 'MEDIUM'
      ? 'PAGINATION_SELECTED_SKY_BLUE_MEDIUM'
      : 'PAGINATION_SELECTED_SKY_BLUE_LARGE';

  return (
    <span
      className={classNames(
        sizeToken ? buttonAnchorStyleVariants[sizeToken] : buttonAnchorStyle,
      )}
    >
      <Button
        as="button"
        className={sizeToken ? buttonStyleVariants[sizeToken] : buttonStyle}
        onClick={handleClick}
      >
        <CommonIcon
          className={iconStyle}
          variant={unSelectedIcon}
          width={unSelectedSize}
          height={unSelectedSize}
        />
        {isSelected && (
          <CommonIcon
            className={iconStyle}
            variant={selectedIcon}
            width={selectedSize}
            height={selectedSize}
          />
        )}
      </Button>
    </span>
  );
};

Pagination.Bar = Bar;
Pagination.Point = Point;

export default Pagination;
