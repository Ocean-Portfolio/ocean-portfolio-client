import { globalStyle, style } from '@vanilla-extract/css';

export const swiperWrap = style({
  width: '100%',
});

export const swiperVisibleSelector = style({});

globalStyle(`${swiperVisibleSelector} > .swiper`, {
  overflow: 'visible !important',
});
