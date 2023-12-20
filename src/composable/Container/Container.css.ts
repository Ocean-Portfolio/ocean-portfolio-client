import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  maxWidth: '90rem',
  minWidth: '17.5rem',

  margin: '0 auto',
  padding: '0 5rem',

  '@media': {
    'screen and (max-width: 1280px)': {
      padding: '0 2rem',
    },
    'screen and (max-width: 599px)': {
      padding: '0 1.25rem',
    },
  },
});
