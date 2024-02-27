import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
import { textPreStyle } from '@/styles/common/text.css';
import {
  commonColorThemeVars,
  userColorThemeVars,
} from '@/styles/theme/index.css';

const wrapCommonStyle = style({
  display: 'inline-flex',
  flexDirection: 'column',
  backdropFilter: 'blur(8px)',
});

export const wrapStyle = style([
  wrapCommonStyle,
  {
    gap: '0.5rem',
    width: '19.25rem',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0.25rem',
        width: '100%',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(248, 252, 253, 0.75)',
      },
    },
  },
]);

export const wrapVariants = styleVariants({
  LARGE: [
    wrapCommonStyle,
    {
      gap: '0.5rem',
      width: '19.25rem',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
  ],
  SMALL: [
    wrapCommonStyle,
    {
      gap: '0.25rem',
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(248, 252, 253, 0.75)',
    },
  ],
});

export const companyStyle = style([
  fontVariants['title-l-bold'],
  textPreStyle,
  colorVariants['gray-scale-06'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-l-bold'],
        color: userColorThemeVars.token['primary-variant'],
      },
    },
  },
]);

export const companyVariants = styleVariants({
  LARGE: [
    fontVariants['title-l-bold'],
    textPreStyle,
    colorVariants['gray-scale-06'],
  ],
  SMALL: [
    fontVariants['paragraph-l-bold'],
    textPreStyle,
    colorVariants['primary-variant'],
  ],
});

export const periodStyle = style([
  fontVariants['display-s-medium'],
  textPreStyle,
  colorVariants['gray-scale-05'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-s-regular'],
        color: commonColorThemeVars.token['gray-scale-05'],
      },
    },
  },
]);

export const periodVariants = styleVariants({
  LARGE: [
    fontVariants['display-s-medium'],
    textPreStyle,
    colorVariants['gray-scale-05'],
  ],
  SMALL: [
    fontVariants['paragraph-s-regular'],
    textPreStyle,
    colorVariants['gray-scale-05'],
  ],
});
