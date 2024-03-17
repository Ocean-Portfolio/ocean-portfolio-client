import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexColumn } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

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

export const barWidthStyle = style({
  width: 'calc(100% + 0.75rem)',
});

export const swiperWrapStyle = style({
  width: 'calc(100% + 5rem)',
  overflow: 'hidden',
});

export const swiperMainStyle = style({
  width: '100%',
});

export const swiperTitleStyle = style([
  colorVariants['gray-scale-06'],
  {
    ...ODSTextTokenVariables['title-m-bold'],
    paddingBottom: '1rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xxl']]: {
        paddingBottom: '1.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-l']]:
        ODSTextTokenVariables['title-s-medium'],
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        paddingBottom: '0.75rem',
        ...ODSTextTokenVariables['title-s-semibold'],
      },
    },
  },
]);

export const swiperItemStyle = style({
  marginRight: '0.75rem',
});

// export const swiperWrapVariants = styleVariants({
//   3: [
//     {
//       width: 'calc(19.375rem * 3 + 0.75rem * 2 + 3.375rem)',

//       '@media': {
//         [ODSBreakpointTokenVariables['breakpoint-xl']]: {
//           width: 'calc(15rem * 3 + 0.75rem * 3)',
//         },
//         [ODSBreakpointTokenVariables['breakpoint-m']]: {
//           width: 'calc(12.5rem * 3 + 0.75rem * 3)',
//         },
//       },
//     },
//   ],
//   4: [
//     {
//       width: 'calc(19.375rem * 4 + 0.75rem * 3 + 0.25rem)',
//       '@media': {
//         [ODSBreakpointTokenVariables['breakpoint-xl']]: {
//           width: 'calc(15rem * 4 + 0.75rem * 4)',
//         },
//       },
//     },
//   ],
// });

// export const bundleStyle = style([
//   gapStyle,
//   {
//     display: 'flex',
//     width: '100%',
//   },
// ]);

export const listBundleStyle = style({
  flexDirection: 'column',
  width: '100%',
  transition: 'all 0.3s ease-in-out',
});

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
