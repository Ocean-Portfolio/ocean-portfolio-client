import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexColumn } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import { userColorThemeVars } from '@/styles/theme/index.css';

export const topStyle = style([
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
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0',
      },
    },
  },
]);

export const titleStyle = style([
  fontVariants['title-m-bold'],
  colorVariants['gray-scale-06'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]:
        ODSTextTokenVariables['title-s-medium'],
      [ODSBreakpointTokenVariables['breakpoint-m']]:
        ODSTextTokenVariables['title-s-semibold'],
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['title-m-bold'],
        color: userColorThemeVars.token['primary-variant'],
      },
    },
  },
]);

export const gapStyle = style({
  gap: '0.75rem',
});

export const slideStyle = style([
  gapStyle,
  {
    display: 'flex',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        position: 'relative',
        // overflowY: 'hidden',
        flexDirection: 'column',
        // transition: 'all 0.3s ease-in-out',
      },
    },
  },
]);

// export const slideVariants = styleVariants({
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
