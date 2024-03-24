import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { inlineFlexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import { commonColorThemeVars } from '@/styles/theme/index.css';

const wrapCommonStyle = style([
  inlineFlexCenter,
  {
    flexDirection: 'column',
  },
]);

export const wrapStyle = style([
  wrapCommonStyle,
  {
    gap: '0.5rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '0',
        padding: '0.625rem',
        borderRadius: '0.25rem',
        backgroundColor: 'rgba(239, 254, 255, 0.30)',
      },
    },
  },
]);

export const wrapVariants = styleVariants({
  LARGE: [
    wrapCommonStyle,
    {
      gap: '0.5rem',
    },
  ],
  MEDIUM: [
    wrapCommonStyle,
    {
      gap: '0.5rem',
    },
  ],
  SMALL: [
    inlineFlexCenter,
    {
      padding: '0.625rem',
      borderRadius: '0.25rem',
      backgroundColor: 'rgba(239, 254, 255, 0.30)',
    },
  ],
});

const pictureCommonStyle = style([
  inlineFlexCenter,
  {
    borderRadius: '0.25rem',
    border: '1.2px solid rgba(239, 254, 255, 0.20)',
    backgroundColor: 'rgba(239, 254, 255, 0.20)',
  },
]);

export const pictureStyle = style([
  pictureCommonStyle,
  {
    padding: '0.9375rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0.625rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        padding: 0,
        border: 'none',
        backgroundColor: 'transparent',
      },
    },
  },
]);

export const pictureVariants = styleVariants({
  LARGE: [
    pictureCommonStyle,
    {
      padding: '0.9375rem',
    },
  ],
  MEDIUM: [
    pictureCommonStyle,
    {
      padding: '0.625rem',
    },
  ],
  SMALL: [inlineFlexCenter],
});

export const imageVariants = {
  LARGE: {
    width: '5.625rem',
    height: '5.625rem',
  },
  MEDIUM: {
    width: '3.625rem',
    height: '3.625rem',
  },
  SMALL: {
    width: '1.5rem',
    height: '1.5rem',
  },
};

const captionCommonStyle = style([
  colorVariants['gray-scale-00'],
  {
    textAlign: 'center',
  },
]);

export const captionStyle = style([
  captionCommonStyle,
  colorVariants['gray-scale-00'],
  {
    ...ODSTextTokenVariables['paragraph-l-medium'],
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        ...ODSTextTokenVariables['caption-m-semibold'],
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-m-medium'],
      },
    },
  },
]);

export const captionVariants = styleVariants({
  LARGE: [captionCommonStyle, fontVariants['paragraph-l-medium']],
  MEDIUM: [captionCommonStyle, fontVariants['caption-m-semibold']],
  SMALL: [captionCommonStyle, fontVariants['paragraph-m-medium']],
});
