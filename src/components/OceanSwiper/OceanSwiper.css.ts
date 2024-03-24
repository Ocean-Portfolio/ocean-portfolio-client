import { globalStyle, style } from '@vanilla-extract/css';

export const swiperVisibleSelector = style({});

globalStyle(`${swiperVisibleSelector} > .swiper`, {
  overflow: 'visible !important',
});
