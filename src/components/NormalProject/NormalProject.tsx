'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import React, {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import Slider from 'react-slick';
import CommonIcon from '@/composable/Icon/CommonIcon';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import { useWindowResize } from '@/hook/useWindowResize';
import { getButtonPositionWithBreakPoints } from './getButtonPositionWithBreakPoints';
import {
  buttonVariants,
  iconVariants,
  sliderStyle,
  wrapStyle,
} from './NormalProject.css';

const NormalProject = () => {
  return (
    <div className={wrapStyle}>
      <Slider
        className={sliderStyle}
        infinite={false}
        focusOnSelect={false}
        slidesToShow={3}
        slidesToScroll={3}
        nextArrow={<NormalProject.ButtonBox />}
        prevArrow={<NormalProject.ButtonBox />}
        speed={500}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

interface ButtonBoxProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
}

const ButtonBox = (props: ButtonBoxProps) => {
  const { className, style, onClick } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const windowSize = useWindowResize();
  const breakPoints = useODSBreakPoints();

  const shiftValue = getButtonPositionWithBreakPoints(breakPoints);

  const direction =
    (className?.split(' ')[1] as 'slick-prev' | 'slick-next') || 'slick-prev';

  const enablePrevPosition = buttonRef.current && direction === 'slick-prev';
  const enableNextPosition = buttonRef.current && direction === 'slick-next';

  const $p = buttonRef.current?.parentElement;
  const $pp = $p?.parentElement;

  const buttonLeftPosition = enablePrevPosition
    ? -($pp as HTMLElement).getBoundingClientRect().left + shiftValue
    : '';

  const buttonRightPosition = enableNextPosition
    ? -windowSize.width +
      ($pp as HTMLElement).getBoundingClientRect().right +
      shiftValue
    : '';

  useLayoutEffect(() => {
    const button = buttonRef.current as HTMLButtonElement;
    const $p = button.parentElement as HTMLElement;
    const $pp = $p.parentElement as HTMLElement;

    const DOMRect = $pp.getBoundingClientRect();

    const { left, right } = DOMRect;

    if (direction === 'slick-prev') {
      const windowStartPoint = -left;
      button.style.left = `${windowStartPoint + shiftValue}px`;
    } else if (direction === 'slick-next') {
      const windowEndPoint = -windowSize.width + right;
      button.style.right = `${windowEndPoint + shiftValue}px`;
    }
  }, [buttonRef]);

  return (
    <button
      className={classNames(className, buttonVariants[direction])}
      ref={buttonRef}
      style={{
        ...style,
        display: 'flex',
        left: buttonLeftPosition,
        right: buttonRightPosition,
      }}
      onClick={onClick}
    >
      <CommonIcon
        className={iconVariants[direction]}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        format="png"
        width={40}
        height={40}
      />
    </button>
  );
};

NormalProject.ButtonBox = ButtonBox;

export default NormalProject;
