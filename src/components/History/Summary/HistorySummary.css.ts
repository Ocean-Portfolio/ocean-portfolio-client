import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexColumn } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import { W100 } from '@/styles/common/layout.css';

export const barWidthStyle = style({
  width: 'calc(100% + 0.75rem)',
  overflow: 'hidden',
});

const swiperWrapCommonStyle = style({
  overflow: 'hidden',
});

export const swiperWrapStyleVariants = styleVariants({
  DETAIL: [
    swiperWrapCommonStyle,
    {
      width: 'calc(100% + 5rem)',
    },
  ],
  DEFAULT: [swiperWrapCommonStyle, W100],
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
// transition: 'all 0.3s ease-in-out',

export const swiperItemStyle = style({
  display: 'inline-flex !important',
  flexDirection: 'column',
  width: 'fit-content !important',
  marginRight: '0.75rem',
});

export const listWrapStyle = style([
  flexColumn,
  {
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
    gap: '0.75rem',
  },
]);

export const listTitleStyle = style([
  fontVariants['title-m-bold'],
  colorVariants['primary-variant'],
]);

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
