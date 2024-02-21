import { globalKeyframes } from '@vanilla-extract/css';

export const globalFadeIn = 'fadeIn';

globalKeyframes(globalFadeIn, {
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});
