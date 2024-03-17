'use client';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import Button from '../Button/Button';
import CommonIcon from '../Icon/CommonIcon';
import {
  barStyle,
  buttonAnchorStyle,
  buttonAnchorStyleVariants,
  buttonStyle,
  buttonStyleVariants,
  iconStyle,
  pointWrapStyle,
  wrapStyle,
  wrapStyleVariants,
} from './Pagination.css';

type PaginationSizeTokens = 'XLARGE' | 'LARGE' | 'MEDIUM';

export interface PaginationProps {
  sizeToken?: PaginationSizeTokens;
  length: number;
  selectedIdx?: number;
  isSelected?: boolean;
  wrapperGapClass?: string;
  barWidthClass?: string;
  contentsWidthClass?: string;
  onClick?: (currentIdx: number) => void;
}

const Pagination = ({
  sizeToken,
  length,
  selectedIdx,
  isSelected,
  wrapperGapClass,
  barWidthClass,
  contentsWidthClass,
  onClick,
}: PropsWithChildren<PaginationProps>) => {
  return (
    <div
      className={classNames(
        sizeToken ? wrapStyleVariants[sizeToken] : wrapStyle,
        wrapperGapClass,
      )}
    >
      <Pagination.Bar barWidthClass={barWidthClass} />
      {Array.from({ length }).map((_, idx) => (
        <Pagination.Point
          sizeToken={sizeToken}
          key={idx}
          idx={idx}
          isSelected={isSelected ? isSelected : idx === selectedIdx}
          contentsWidthClass={contentsWidthClass}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

interface BarProps {
  barWidthClass?: string;
}

const Bar = ({ barWidthClass }: BarProps) => {
  return <hr className={classNames(barStyle, barWidthClass)} />;
};

interface PointProps {
  sizeToken?: PaginationSizeTokens;
  idx: number;
  isSelected: boolean;
  contentsWidthClass?: string;
  onClick?: (currentIdx: number) => void;
}

const Point = ({
  sizeToken,
  idx,
  isSelected,
  contentsWidthClass,
  onClick,
}: PointProps) => {
  const { breakpointL } = useODSBreakPoints();

  const handleClick = () => {
    if (onClick) onClick(idx);
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
    <div className={classNames(pointWrapStyle, contentsWidthClass)}>
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
    </div>
  );
};

Pagination.Bar = Bar;
Pagination.Point = Point;

export default Pagination;
