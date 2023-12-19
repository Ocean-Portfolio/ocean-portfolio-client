import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  minWidth: '22.5rem',

  padding: '0 5rem',

  '@media': {
    'screen and (max-width: 900px)': {
      padding: '0 2rem',
    },
    'screen and (max-width: 600px)': {
      padding: '0 1.25rem',
    },
  },
});
