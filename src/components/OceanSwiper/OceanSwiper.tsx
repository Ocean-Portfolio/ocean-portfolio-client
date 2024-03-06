'use client';

import classNames from 'classnames';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import Tag from '@/composable/Tag/Tag';
import { customEvents } from '@/const/customEvents';
import { getStaticContext } from '@/utils/context/StaticContext';
import { ContextValueOceanSwiper } from './OceanSwiper.context';
import { swiperSelector } from './OceanSwiper.css';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const OceanSwiper = ({
  children,
  className,
  style,
}: PropsWithChildren<Props>) => {
  return (
    <ContextValueOceanSwiper.Provider
      value={{
        swiperWrapperRef: {
          current: null,
        },
        buttonRefs: {
          prev: null,
          next: null,
        },
      }}
    >
      <OceanSwiper.Wrap className={className} style={style}>
        {children}
      </OceanSwiper.Wrap>
    </ContextValueOceanSwiper.Provider>
  );
};

interface WrapProps {
  className?: string;
  style?: React.CSSProperties;
}

const Wrap = ({ children, className, style }: PropsWithChildren<WrapProps>) => {
  const { swiperWrapperRef } = getStaticContext(ContextValueOceanSwiper);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    swiperWrapperRef.current = divRef.current;
    typeof window !== 'undefined' &&
      window.dispatchEvent(
        new CustomEvent(customEvents.SWIPER_INIT, {
          detail: swiperWrapperRef.current,
        }),
      );
  }, []);

  return (
    <div className={className} ref={divRef} style={style}>
      {children}
    </div>
  );
};

interface MainProps extends SwiperOptions {
  className?: string;
  hiddenNavigation?: boolean;
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
  isSwipeAble?: boolean;
}

const Main = ({
  children,
  className,
  hiddenNavigation,
  prevButton,
  nextButton,
  isSwipeAble = true,
  ...rest
}: PropsWithChildren<MainProps>) => {
  const { swiperWrapperRef } = getStaticContext(ContextValueOceanSwiper);
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className={classNames(className, swiperSelector)}>
      <Swiper
        {...rest}
        ref={swiperRef}
        modules={[A11y]}
        slidesPerView={'auto'}
        allowSlideNext={isSwipeAble}
        allowSlidePrev={isSwipeAble}
        onRealIndexChange={(e) => {
          swiperWrapperRef.current &&
            swiperWrapperRef.current.dispatchEvent(
              new CustomEvent(customEvents.SWIPER_REAL_INDEX_CHANGE, {
                detail: e,
              }),
            );
        }}
      >
        {hiddenNavigation === true ? (
          <OceanSwiper.Button hidden direction="PREV" />
        ) : (
          prevButton
        )}
        {children}
        {hiddenNavigation === true ? (
          <OceanSwiper.Button hidden direction="NEXT" />
        ) : (
          nextButton
        )}
      </Swiper>
    </div>
  );
};

interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  direction: ButtonDirection;
  hidden?: boolean;
}

const Button = ({ className, style, direction, hidden }: ButtonProps) => {
  const swiper = useSwiper();
  const handleClick = () => {
    if (direction === 'PREV') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  const { buttonRefs } = getStaticContext(ContextValueOceanSwiper);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (direction === 'PREV') {
      buttonRefs.prev = buttonRef.current;
    } else {
      buttonRefs.next = buttonRef.current;
    }
  }, []);

  return (
    <button
      type="button"
      ref={buttonRef}
      className={className}
      style={style}
      hidden={hidden}
      onClick={handleClick}
    />
  );
};

OceanSwiper.Wrap = Wrap;
OceanSwiper.Top = Tag;
OceanSwiper.Main = Main;
OceanSwiper.Slide = SwiperSlide;
OceanSwiper.Button = Button;

export default OceanSwiper;
