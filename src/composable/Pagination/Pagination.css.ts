import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { globalFadeIn } from '@/styles/animation/fade.css';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';

const wrapCommonStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const wrapStyle = style([
  wrapCommonStyle,
  {
    width: '100%',
    height: '0.25rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        height: '0.125rem',
      },
    },
  },
]);

export const wrapStyleVariants = styleVariants({
  XLARGE: [
    wrapCommonStyle,
    {
      width: '80rem',
      height: '0.25rem',
    },
  ],
  LARGE: [
    wrapCommonStyle,
    {
      width: '62.25rem',
      height: '0.125rem',
    },
  ],
  MEDIUM: [
    wrapCommonStyle,
    {
      width: '52.4375rem',
      height: '0.125rem',
    },
  ],
});

export const barStyle = style([
  backgroundColorVariants['sky-cyan-300'],
  {
    position: 'absolute',
    width: '100%',
    borderRadius: '0.4375rem',
    opacity: 0.7,
    height: '100%',
  },
]);

export const pointWrapStyle = style([flexCenter]);

const buttonAnchorCommonStyle = style([
  flexCenter,
  {
    position: 'relative',
  },
]);

export const buttonAnchorStyle = style([
  buttonAnchorCommonStyle,
  {
    width: '0.75rem',
    height: '0.75rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        width: '0.5rem',
        height: '0.5rem',
      },
    },
  },
]);

export const buttonAnchorStyleVariants = styleVariants({
  XLARGE: [
    buttonAnchorCommonStyle,
    {
      width: '0.75rem',
      height: '0.75rem',
    },
  ],
  LARGE: [
    buttonAnchorCommonStyle,
    {
      width: '0.5rem',
      height: '0.5rem',
    },
  ],
  MEDIUM: [
    buttonAnchorCommonStyle,
    {
      width: '0.5rem',
      height: '0.5rem',
    },
  ],
});

const buttonCommonStyle = style([
  flexCenter,
  {
    position: 'absolute',
    boxSizing: 'content-box',
    width: '100%',
    height: '100%',
  },
]);

export const buttonStyle = style([
  buttonCommonStyle,
  {
    padding: '0.375rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0.25rem',
      },
    },
  },
]);

export const buttonStyleVariants = styleVariants({
  XLARGE: [
    buttonCommonStyle,
    {
      padding: '0.375rem',
    },
  ],
  LARGE: [
    buttonCommonStyle,
    {
      padding: '0.25rem',
    },
  ],
  MEDIUM: [
    buttonCommonStyle,
    {
      padding: '0.25rem',
    },
  ],
});

export const iconStyle = style({
  position: 'absolute',
  userSelect: 'none',
  pointerEvents: 'none',
  animation: `${globalFadeIn} 0.2s ease-in-out`,
});
