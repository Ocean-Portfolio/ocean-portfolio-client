import { style, styleVariants } from '@vanilla-extract/css';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style({
  display: 'flex',
  gap: '0.25rem',
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
