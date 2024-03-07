import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexCenter, flexColumn } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import { textPreStyle } from '@/styles/common/text.css';
import {
  colorPaletteThemeVars,
  commonColorThemeVars,
} from '@/styles/theme/index.css';

const wrapCommonStyle = style([
  flexColumn,
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
]);

export const wrapStyle = style([
  wrapCommonStyle,
  {
    gap: '0.5rem',
    width: '19.5rem',
    height: '100%',
    padding: '1.5rem',
    borderRadius: '1rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        width: '100%',
        height: 'auto',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0.125rem',
        padding: '0.6875rem 0.75rem',
        borderRadius: '0.5rem',
      },
    },
  },
]);

export const wrapStyleVariants = styleVariants({
  LARGE: [
    wrapCommonStyle,
    {
      gap: '0.5rem',
      width: '19.5rem',
      height: '21.625rem',
      padding: '1.5rem',
      borderRadius: '1rem',
    },
  ],
  SMALL: [
    wrapCommonStyle,
    {
      gap: '0.125rem',
      width: '9.375rem',
      height: 'auto',
      padding: '0.6875rem 0.75rem',
      borderRadius: '0.5rem',
    },
  ],
});

export const headlineStyle = style([
  flexCenter,
  colorVariants['secondary-variant'],
  {
    gap: '0.25rem',
    ...ODSTextTokenVariables['title-s-medium'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0.125rem',
        ...ODSTextTokenVariables['GNB-m-medium'],
      },
    },
  },
]);

export const headlineStyleVariants = styleVariants({
  LARGE: [
    flexCenter,
    fontVariants['title-s-medium'],
    {
      gap: '0.25rem',
    },
  ],
  SMALL: [
    flexCenter,
    fontVariants['GNB-m-medium'],
    {
      gap: '0.125rem',
    },
  ],
});

export const strongStyle = style([
  {
    ...ODSTextTokenVariables['title-xl-bold'],
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['title-s-semibold'],
      },
    },
  },
]);

const iconCommonStyle = style({
  transform: 'rotate(180deg)',
});

export const iconStyle = style([
  iconCommonStyle,
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        width: '0.75rem',
        height: '0.75rem',
      },
    },
  },
]);

export const iconStyleVariants = styleVariants({
  LARGE: [iconCommonStyle],
  SMALL: [
    iconCommonStyle,
    {
      width: '0.75rem',
      height: '0.75rem',
    },
  ],
});

export const strongWrapStyle = style([flexCenter]);

export const strongStyleVariants = styleVariants({
  LARGE: [fontVariants['title-xl-bold']],
  SMALL: [fontVariants['title-s-semibold']],
});

export const contentStyle = style([
  textPreStyle,
  {
    ...ODSTextTokenVariables['paragraph-s-medium'],
    color: colorPaletteThemeVars.token['sky-cyan-100'],
    textAlign: 'center',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-s-regular'],
        color: commonColorThemeVars.token['gray-scale-00'],
      },
    },
  },
]);

export const contentStyleVariants = styleVariants({
  LARGE: [
    fontVariants['paragraph-s-medium'],
    colorVariants['sky-cyan-100'],
    textPreStyle,
  ],
  SMALL: [
    fontVariants['paragraph-s-regular'],
    colorVariants['gray-scale-00'],
    textPreStyle,
  ],
});
