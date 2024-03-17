import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { commonColorThemeVars } from '@/styles/theme/index.css';

export const wrapStyle = style({
  display: 'grid',
  gridAutoRows: 'auto',
  columnGap: '1rem',
  width: '100%',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xxl']]: {
      columnGap: '2.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const wrapColumnStyle = style({
  gridTemplateColumns: '11.75rem calc(100% - 11.75rem - 1rem)', //
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xxl']]: {
      gridTemplateColumns: '14.5rem calc(100% - 14.5rem - 2.5rem)', //
    },
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      gridTemplateColumns: '7.4375rem calc(100% - 7.4375rem - 2.5rem)', //
    },
    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      gridTemplateColumns: '7.4375rem calc(100% - 7.4375rem - 2.5rem)', //
    },
  },
});

export const menuStyle = style([
  {
    gridRow: '1 / 3',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xxl']]: {
        gap: '2.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        gap: '1.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        gap: '0.75rem',
      },
    },
  },
]);

export const menuButtonStyle = style({
  justifyContent: 'flex-start',
  ...ODSTextTokenVariables['title-s-semibold'],
  color: commonColorThemeVars.token['gray-scale-06'],
  opacity: 0.5,
});

export const menuButtonSelectedStyle = style({
  opacity: 1,
});
