import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { globalFadeIn } from '@/styles/animation/fade.css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const defaultContentsStyle = style({
  // display: 'flex',
  // gap: '1.5rem',
  // '@media': {
  //   [ODSBreakpointTokenVariables['breakpoint-s']]: {
  //     gap: '0.75rem',
  //   },
  // },
});

export const sliderStyle = style({
  width: '100%',
  height: '100%',
});

globalStyle('.slick-list', {
  overflow: 'visible !important',
});

globalStyle('.slick-track', {
  display: 'flex',
  // gap: '1.5rem',

  // '@media': {
  //   [ODSBreakpointTokenVariables['breakpoint-s']]: {
  //     gap: '0.75rem',
  //   },
  // },
});

globalStyle('.slick-track::before', {
  display: 'none',
});

globalStyle('.slick-slide', {
  // width: 'fit-content !important',
});

globalStyle('.slick-arrow', {
  zIndex: 10,
});

globalStyle('.slick-arrow::before', {
  content: '',
});

const buttonStyle = style([
  flexCenter,
  {
    width: '2.5rem',
    height: '2.5rem',
  },
]);

// TODO: buttonAnimationStyle

const buttonAnimationStyle = style({
  animation: `${globalFadeIn} 0.3s ease-in-out`,
});

export const buttonVariants = styleVariants({
  'slick-prev': [
    buttonStyle,
    buttonAnimationStyle,
    {
      left: '0',
    },
  ],
  'slick-next': [
    buttonStyle,
    buttonAnimationStyle,
    {
      right: '0',
    },
  ],
});

export const iconVariants = styleVariants({
  'slick-prev': [buttonStyle],
  'slick-next': [buttonStyle, { transform: 'rotate(180deg)' }],
});
