import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import {
  flexCenter,
  flexColumn,
  inlineFlexCenter,
} from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import {
  commonColorThemeVars,
  userColorThemeVars,
} from '@/styles/theme/index.css';

export const swiperWrapStyle = style([
  flexColumn,
  {
    display: 'flex',
    gap: '3rem',
    width: '100%',
    overflow: 'hidden',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        gap: '2.5rem',
      },
    },
  },
]);

export const swiperTopStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const swiperItemStyle = style({
  overflow: 'hidden',
  display: 'inline-flex',
  gap: '1.75rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gap: '1.5rem',
    },
  },
});
export const readMoreButtonStyle = style([
  colorVariants['gray-scale-00'],
  {
    borderBottom: '1px solid currentColor',
    ...ODSTextTokenVariables['paragraph-m-bold'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        ...ODSTextTokenVariables['paragraph-s-medium'],
      },
    },
  },
]);

export const interactionBarStyle = style([
  flexCenter,
  {
    gap: '1.25rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        gap: '1rem',
      },
    },
  },
]);

export const buttonGroupStyle = style([
  flexCenter,
  {
    gap: '1rem',
  },
]);

export const navigationButtonStyle = style([
  inlineFlexCenter,
  {
    padding: '.25rem',
    borderRadius: '.5625rem',
    border: '1px solid',
    borderColor: userColorThemeVars.token['secondary-variant'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        borderRadius: '.3937rem',
        border: '0.7px solid',
      },
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        borderRadius: '.3375rem',
        border: '0.6px solid',
      },
    },
  },
]);

export const iconVariants = styleVariants({
  PREV: [],
  NEXT: [
    {
      transform: 'rotate(180deg)',
    },
  ],
});
