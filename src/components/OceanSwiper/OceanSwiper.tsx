'use client';

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import Tag from '@/composable/Tag/Tag';
import { customEvents } from '@/const/customEvents';
import { getStaticContext } from '@/utils/context/StaticContext';
import {
  ContextDispatchOceanSwiper,
  ContextValueOceanSwiper,
} from './OceanSwiper.context';

// TODO : 이벤트 위임 구현과 UI 컨트롤 로직을 위한 컨텍스트 API 사용

const OceanSwiper = ({ children }: PropsWithChildren) => {
  return (
    <ContextDispatchOceanSwiper.Provider value={{}}>
      <ContextValueOceanSwiper.Provider
        value={{
          buttonRefs: {
            prev: null,
            next: null,
          },
        }}
      >
        <div>{children}</div>
      </ContextValueOceanSwiper.Provider>
    </ContextDispatchOceanSwiper.Provider>
  );
};

interface MainProps extends SwiperOptions {
  hiddenNavigation?: boolean;
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
}

const Main = ({
  children,
  hiddenNavigation,
  prevButton,
  nextButton,
  ...rest
}: PropsWithChildren<MainProps>) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <Swiper
      {...rest}
      ref={swiperRef}
      modules={[A11y]}
      slidesPerView={1}
      onRealIndexChange={(e) => {
        typeof window !== 'undefined' &&
          window.dispatchEvent(
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

OceanSwiper.Top = Tag;
OceanSwiper.Main = Main;
OceanSwiper.Slide = SwiperSlide;
OceanSwiper.Button = Button;

export default OceanSwiper;
