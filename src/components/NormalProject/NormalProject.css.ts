import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const sliderStyle = style({
  width: '100%',
  height: '100%',
});

globalStyle('.slick-list', {
  overflow: 'visible !important',
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
  transition: 'all 0.3s ease-in-out',
  // opacity: 0,
  // ':hover': {
  //   opacity: 1,
  // },
});

export const buttonVariants = styleVariants({
  'slick-prev': [
    buttonStyle,
    buttonAnimationStyle,
    {
      left: 'calc(-2.5rem + -12.5rem)',
    },
  ],
  'slick-next': [
    buttonStyle,
    buttonAnimationStyle,
    {
      right: 'calc(-2.5rem + -12.5rem)',
    },
  ],
});

export const iconVariants = styleVariants({
  'slick-prev': [buttonStyle],
  'slick-next': [buttonStyle, { transform: 'rotate(180deg)' }],
});
