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

const commonCardWidthStyle = style({
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      width: '15rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      width: '12.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      width: '100%',
    },
  },
});

export const defaultCardWidthStyle = style([
  commonCardWidthStyle,
  {
    width: '19.375rem',
  },
]);

export const detailViewCardWidthStyle = style([
  commonCardWidthStyle,
  {
    width: '16.0625rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        width: '19.375rem',
      },
    },
  },
]);

export const wrapStyle = style([
  {
    gap: '0.5rem',
    padding: '1.5rem 2.15625rem',
    borderRadius: '0.75rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        padding: '1.5rem 0.875rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0.875rem 1.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0.25rem',
        height: '100%',
        padding: '0.75rem',
        borderRadius: '0.5rem',
      },
    },
  },
]);

export const wrapVariants = styleVariants({
  LARGE: [
    {
      gap: '0.5rem',
      width: '19.375rem',
      padding: '1.5rem 2.15625rem',
      borderRadius: '0.75rem',
    },
  ],
  SMALL: [
    {
      gap: '0.25rem',
      width: 'auto',
      padding: '0.75rem',
      borderRadius: '0.5rem',
    },
  ],
});

export const companyStyle = style([
  textPreStyle,
  {
    width: '100%',
    textAlign: 'left',

    ...ODSTextTokenVariables['title-s-semibold'],
    color: userColorThemeVars.token['tertiary-variant'],
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-m-bold'],
        color: userColorThemeVars.token['primary-variant'],
      },
    },
  },
]);

export const companyVariants = styleVariants({
  LARGE: [
    fontVariants['title-s-semibold'],
    textPreStyle,
    colorVariants['tertiary-variant'],
  ],
  SMALL: [
    fontVariants['paragraph-m-bold'],
    textPreStyle,
    colorVariants['primary-variant'],
  ],
});

export const periodStyle = style([
  textPreStyle,
  {
    width: '100%',
    textAlign: 'left',
    ...ODSTextTokenVariables['paragraph-m-semibold'],
    color: commonColorThemeVars.token['gray-scale-05'],
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
