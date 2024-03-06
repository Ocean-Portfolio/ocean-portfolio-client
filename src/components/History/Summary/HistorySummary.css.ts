import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexColumn } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

export const swiperTopStyle = style([
  flexColumn,
  {
    gap: '1rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xxl']]: {
        gap: '1.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        gap: '0.75rem',
      },
    },
  },
]);

export const swiperTitleStyle = style([
  fontVariants['title-m-bold'],
  colorVariants['gray-scale-06'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]:
        ODSTextTokenVariables['title-s-medium'],
      [ODSBreakpointTokenVariables['breakpoint-m']]:
        ODSTextTokenVariables['title-s-semibold'],
    },
  },
]);

export const listWrapStyle = style([
  flexColumn,
  {
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
  },
]);

export const listTitleStyle = style([
  fontVariants['title-m-bold'],
  colorVariants['primary-variant'],
]);

export const gapStyle = style({
  gap: '0.75rem',
});

export const swiperSelector = style({});

export const swiperWrapVariants = styleVariants({
  3: [
    {
      width: 'calc(15rem * 3 + 0.75rem * 2)',

      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-m']]: {
          width: 'calc(12.5rem * 3 + 0.75rem * 2)',
        },
      },
    },
  ],
  4: [
    {
      width: 'calc(19.375rem * 4 + 0.75rem * 3)',

      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-xl']]: {
          width: 'calc(15rem * 4 + 0.75rem * 3)',
        },
      },
    },
  ],
});

globalStyle(`${swiperSelector} > .swiper`, {
  overflow: 'visible !important',
});

export const bundleStyle = style([
  gapStyle,
  {
    display: 'flex',
    width: 'fit-content',
  },
]);

export const listBundleStyle = style({
  // overflowY: 'hidden',
  flexDirection: 'column',
  width: '100%',
  transition: 'all 0.3s ease-in-out',
});

// export const listBundleVariants = styleVariants({
//   OPEN: {
//     height: 'auto',
//   },
//   CLOSE: {
//     height: '10rem',
//   },
// });

export const buttonStyle = style({
  position: 'absolute',
  left: '50%',
  bottom: '0',
});

export const iconStyle = style({
  transition: 'all 0.3s ease-in-out',
});

export const iconStyleVariants = styleVariants({
  OPEN: {
    transform: 'rotate(90deg)',
  },
  CLOSE: {
    transform: 'rotate(-90deg)',
  },
});
