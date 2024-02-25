'use client';

import 'swiper/css';

import React, { PropsWithChildren } from 'react';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

// TODO : 이벤트 위임 구현과 UI 컨트롤 로직을 위한 컨텍스트 API 사용
interface Props {}

const OceanSwiper = ({ children }: PropsWithChildren<Props>) => {
  return <div>{children}</div>;
};

const Top = ({ children }: PropsWithChildren) => {
  return { children };
};

interface MainProps extends SwiperOptions {
  eventDelegation?: boolean;
  prevButton: React.ReactNode;
  nextButton: React.ReactNode;
}

const Main = ({
  children,
  eventDelegation,
  prevButton,
  nextButton,
  ...rest
}: PropsWithChildren<MainProps>) => {
  return (
    <Swiper {...rest} modules={[A11y]} slidesPerView={1}>
      {eventDelegation === true ? (
        <OceanSwiper.Button hidden direction="PREV" />
      ) : (
        prevButton
      )}
      {children}
      {eventDelegation === true ? (
        <OceanSwiper.Button hidden direction="NEXT" />
      ) : (
        nextButton
      )}
    </Swiper>
  );
};

interface SlideProps {
  ids: string[];
  childs: React.ReactNode[];
}

const Slide = ({ ids, childs }: SlideProps) => {
  return (
    <div>
      {childs.map((child, index) => (
        <SwiperSlide key={ids[index]}>{child}</SwiperSlide>
      ))}
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
  return (
    <button
      type="button"
      className={className}
      style={style}
      hidden={hidden}
      onClick={handleClick}
    />
  );
};

OceanSwiper.Top = Top;
OceanSwiper.Main = Main;
OceanSwiper.slide = Slide;
OceanSwiper.Button = Button;

export default OceanSwiper;
