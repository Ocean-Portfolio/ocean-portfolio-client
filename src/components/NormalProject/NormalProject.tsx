'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import React, { CSSProperties, MouseEventHandler } from 'react';
import Slider from 'react-slick';
import CommonIcon from '@/composable/Icon/CommonIcon';
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
  const direction =
    (className?.split(' ')[1] as 'slick-prev' | 'slick-next') || 'slick-prev';

  return (
    <button
      className={classNames(className, buttonVariants[direction])}
      style={{ ...style, display: 'flex' }}
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
