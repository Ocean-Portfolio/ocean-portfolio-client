import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

export const wrapStyle = style([
  flexCenter,
  {
    position: 'relative',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '0 4.69rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0',
      },
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        padding: '0 0.69rem',
      },
    },
  },
]);

export const wrapVariants = styleVariants({
  DESKTOP: {
    height: '31.25rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        height: '31.61455rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        height: '20rem',
      },
    },
  },
  MOBILE: {
    height: '33.5625rem',
    gap: '5rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        gap: '3rem',
        height: '19.5rem',
      },
    },
  },
});

export const mockWrapStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const mockWrapVariants = styleVariants({
  DESKTOP: {
    minWidth: '24.375rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        minWidth: '16.5625rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        minWidth: '15.5625rem',
      },
    },
  },
  MOBILE: {
    width: '100%',
  },
});

export const mockStyle = style({
  position: 'absolute',
  right: '0',
});

export const mockVariants = styleVariants({
  DESKTOP: {
    width: '54.875rem',
    height: '31.25rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        height: '31.61455rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        width: '34.625rem',
        height: '20rem',
      },
    },
  },
  MOBILE: {
    width: '19.375rem',
    height: '33.5625rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        width: '11.25rem',
        height: '19.5rem',
      },
    },
  },
});

export const contentWrapStyle = style({
  display: 'grid',
  gridAutoFlow: 'row',
  gridAutoRows: 'auto',
  justifyContent: 'center',
  rowGap: '1.5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      rowGap: '1rem',
    },
  },
});

export const titleStyle = style([
  colorVariants['gray-scale-02'],
  fontVariants['title-l-bold'],
]);

export const periodStyle = style([
  colorVariants['secondary-variant'],
  fontVariants['title-s-medium'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-m']]:
        ODSTextTokenVariables['paragraph-m-bold'],
    },
  },
]);

export const descriptionStyle = style([
  colorVariants['gray-scale-00'],
  fontVariants['paragraph-l-medium'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-m']]:
        ODSTextTokenVariables['paragraph-l-semibold'],
    },
  },
]);

export const buttonStyle = style([
  colorVariants['tertiary'],
  fontVariants['display-s-medium'],
  {
    width: '15rem',
  },
]);
