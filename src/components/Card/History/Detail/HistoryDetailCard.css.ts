import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexColumn } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import { textPreStyle } from '@/styles/common/text.css';
import { commonColorThemeVars } from '@/styles/theme/index.css';

export const wrapStyle = style([
  {
    gap: '1.25rem',
    width: '100%',
    padding: '2rem',
    borderRadius: '1rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
      },
    },
  },
]);

export const wrapVariants = styleVariants({
  LARGE: [
    {
      gap: '1.25rem',
      width: '100%',
      maxWidth: '40.25rem',
      padding: '2rem',
      borderRadius: '1rem',
    },
  ],
  SMALL: [
    {
      gap: '1rem',
      width: '20rem',
      padding: '1rem',
      borderRadius: '0.5rem',
    },
  ],
});

export const headStyle = style([
  flexColumn,
  {
    gap: '0.25rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0',
      },
    },
  },
]);

export const headVariants = styleVariants({
  LARGE: [
    flexColumn,
    {
      gap: '0.25rem',
    },
  ],
  SMALL: [
    flexColumn,
    {
      gap: '0',
    },
  ],
});

export const titleStyle = style([
  colorVariants['tertiary-variant'],
  fontVariants['title-m-bold'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-m-bold'],
        color: commonColorThemeVars.token['gray-scale-06'],
      },
    },
  },
]);

export const titleVariants = styleVariants({
  LARGE: [colorVariants['tertiary-variant'], fontVariants['title-m-bold']],
  SMALL: [colorVariants['gray-scale-06'], fontVariants['paragraph-m-bold']],
});

export const periodStyle = style([
  colorVariants['primary-variant'],
  fontVariants['paragraph-l-semibold'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]:
        ODSTextTokenVariables['caption-m-semibold'],
    },
  },
]);

export const periodVariants = styleVariants({
  LARGE: [
    colorVariants['primary-variant'],
    fontVariants['paragraph-l-semibold'],
  ],
  SMALL: [colorVariants['primary-variant'], fontVariants['caption-m-semibold']],
});

export const positionStyle = style([
  colorVariants['gray-scale-06'],
  fontVariants['paragraph-l-medium'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]:
        ODSTextTokenVariables['paragraph-s-medium'],
    },
  },
]);

export const positionVariants = styleVariants({
  LARGE: [colorVariants['gray-scale-06'], fontVariants['paragraph-l-medium']],
  SMALL: [colorVariants['gray-scale-06'], fontVariants['paragraph-s-medium']],
});

export const contentStyle = style([
  textPreStyle,
  fontVariants['paragraph-m-medium'],
  {
    color: commonColorThemeVars.token['gray-scale-06'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-s-regular'],
      },
    },
  },
]);

export const contentVariants = styleVariants({
  LARGE: [textPreStyle, fontVariants['paragraph-m-medium']],
  SMALL: [textPreStyle, fontVariants['paragraph-s-regular']],
});

export const contentSelector = style({});

globalStyle(`.${contentSelector} > ul`, {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  listStylePosition: 'inside',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      gap: '0.5rem',
    },
  },
});

globalStyle(`.${contentSelector} > ol`, {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  listStylePosition: 'inside',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      gap: '0.5rem',
    },
  },
});

globalStyle(`li::marker`, {
  color: commonColorThemeVars.token['gray-scale-06'],
  ...ODSTextTokenVariables['paragraph-m-medium'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      ...ODSTextTokenVariables['paragraph-s-regular'],
    },
  },
});

globalStyle(`${contentVariants.SMALL} > ul > li::marker`, {
  ...ODSTextTokenVariables['paragraph-s-regular'],
});

globalStyle(`${contentVariants.SMALL} > ol > li::marker`, {
  ...ODSTextTokenVariables['paragraph-s-regular'],
});
