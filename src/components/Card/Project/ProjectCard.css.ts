import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { fontVariants } from '@/styles/common/font.css';
import { textPreStyle } from '@/styles/common/text.css';

export const wrapStyle = style({
  borderRadius: '0.75rem',

  paddingTop: '1.5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      paddingTop: '1.32rem',
    },

    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      paddingTop: '1.25rem',
    },
  },
});

export const wrapVariants = styleVariants({
  LARGE: { paddingTop: '1.5rem' },
  MEDIUM: { paddingTop: '1.32rem' },
  SMALL: { paddingTop: '1.25rem' },
});

export const sizeStyle = style({
  width: '25.5rem',
  height: '25.5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      width: '22.5rem',
      height: '22.5rem',
    },

    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      width: '17.5rem',
      height: '22.5rem',
    },
  },
});

export const sizeVariants = styleVariants({
  LARGE: {
    width: '25.5rem',
    height: '25.5rem',
  },
  MEDIUM: {
    width: '22.5rem',
    height: '22.5rem',
  },
  SMALL: {
    width: '17.5rem',
    height: '22.5rem',
  },
});

export const gapStyle = style({
  gap: '1rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gap: '0.88238rem',
    },

    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      gap: '1rem',
    },
  },
});

export const gapVariants = styleVariants({
  LARGE: {
    gap: '1rem',
  },
  MEDIUM: {
    gap: '0.88238rem',
  },
  SMALL: {
    gap: '1rem',
  },
});

export const nameStyle = style([
  textPreStyle,
  {
    padding: '0 1.5rem',
    ...ODSTextTokenVariables['title-m-bold'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0 1.32rem',
        ...ODSTextTokenVariables['title-s-semibold'],
      },

      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        padding: '0 1.25rem',
        ...ODSTextTokenVariables['paragraph-l-bold'],
      },
    },
  },
]);

export const nameVariants = styleVariants({
  LARGE: [textPreStyle, fontVariants['title-m-bold'], { padding: '0 1.5rem' }],
  MEDIUM: [
    textPreStyle,
    fontVariants['title-s-semibold'],
    { padding: '0 1.32rem' },
  ],
  SMALL: [
    textPreStyle,
    fontVariants['paragraph-l-bold'],
    { padding: '0 1.25rem' },
  ],
});

export const descriptionStyle = style([
  textPreStyle,
  {
    padding: '0 1.5rem',
    ...ODSTextTokenVariables['paragraph-s-regular'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0 1.32rem',
        ...ODSTextTokenVariables['paragraph-s-regular'],
      },

      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        padding: '0 1.25rem',
        ...ODSTextTokenVariables['paragraph-m-medium'],
      },
    },
  },
]);

export const descriptionVariants = styleVariants({
  LARGE: [
    textPreStyle,
    fontVariants['paragraph-s-regular'],
    { padding: '0 1.5rem' },
  ],
  MEDIUM: [
    textPreStyle,
    fontVariants['paragraph-s-regular'],
    { padding: '0 1.32rem' },
  ],
  SMALL: [
    textPreStyle,
    fontVariants['paragraph-m-medium'],
    { padding: '0 1.25rem' },
  ],
});

export const periodStyle = style({
  marginLeft: '1.5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      marginLeft: '1.32rem',
    },

    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      marginLeft: '1.25rem',
    },
  },
});

export const periodVariants = styleVariants({
  LARGE: { marginLeft: '1.5rem' },
  MEDIUM: { marginLeft: '1.32rem' },
  SMALL: { marginLeft: '1.25rem' },
});

export const imageStyle = style({
  justifySelf: 'flex-end',
  alignSelf: 'flex-end',
  borderRadius: '0.75rem',
});
