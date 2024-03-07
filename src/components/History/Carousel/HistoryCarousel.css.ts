import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const topStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
});

export const swiperWrapStyle = style({});

globalStyle(`${swiperWrapStyle} > .swiper`, {
  paddingTop: '1.5rem',
});

export const slideStyle = style({
  display: 'grid !important',
  gridTemplateColumns: '1fr 19.5rem',
  gridTemplateRows: 'auto auto',
});

export const detailStyle = style({
  gridColumn: '1 / 2',
  gridRow: '1 / 3',
});

export const impactStyle = style({
  gridColumn: '2 / 3',
});

export const iconVariants = styleVariants({
  PREV: [],
  NEXT: [
    {
      transform: 'rotate(180deg)',
    },
  ],
});
