import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  minWidth: '22.5rem',

  '@media': {
    'screen and (min-width: 390px)': {
      padding: '0 1.25rem',
    },
    'screen and (min-width: 768px)': {
      padding: '0 2rem',
    },
    'screen and (min-width: 900px)': {
      padding: '0 5rem',
    },
  },
});
