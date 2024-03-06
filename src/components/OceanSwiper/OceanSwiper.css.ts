import { globalStyle, style } from '@vanilla-extract/css';

export const swiperSelector = style({});

globalStyle(`${swiperSelector} > .swiper`, {
  overflow: 'visible !important',
});
