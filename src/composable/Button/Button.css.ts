import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 0.8,
  },
});
