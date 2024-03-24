import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyleVariants = styleVariants({
  BOTTOM: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  DEFAULT: {
    display: 'flex',
    gap: '0.25rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        width: '15rem',
      },
    },
  },
});

const buttonAnchorCommonStyle = style([
  flexCenter,
  backgroundColorVariants['secondary-variant'],
  {
    position: 'relative',
    height: '0.125rem',
    borderRadius: '0.25rem',
    transition: 'all 0.3s ease-in-out',
  },
]);

export const buttonAnchorStyleVariant = styleVariants({
  SELECTED: [
    buttonAnchorCommonStyle,
    {
      width: '2rem',
      opacity: 1,
      ':hover': {
        opacity: 0.8,
      },

      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-s']]: {
          width: '100%',
        },
      },
    },
  ],
  DEFAULT: [
    buttonAnchorCommonStyle,
    {
      width: '1.5rem',
      opacity: 0.4,
      ':hover': {
        opacity: 0.2,
      },

      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-s']]: {
          width: '100%',
        },
      },
    },
  ],
});

export const buttonStyle = style({
  position: 'absolute',
  boxSizing: 'content-box',
  width: '100%',
  height: '100%',
  padding: '0.25rem 0.1rem',
});
