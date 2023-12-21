import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import {
  commonColorThemeVars,
  userColorThemeVars,
} from '@/styles/theme/index.css';

export const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gap: '2.5rem',
    },
  },
});

export const titleStyle = style({
  ...ODSTextTokenVariables['display-l-bold'],
  color: commonColorThemeVars.token['gray-scale-00'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      ...ODSTextTokenVariables['title-l-bold'],
      color: userColorThemeVars.token.accent,
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      ...ODSTextTokenVariables['title-m-bold'],
      color: commonColorThemeVars.token['gray-scale-00'],
    },
  },
});

export const articleWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '0 auto',
});
