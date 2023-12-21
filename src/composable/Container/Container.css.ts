import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'grid',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  gap: '15rem',

  width: '100%',
  minWidth: '17.5rem',

  padding: '0 5rem',

  '@media': {
    'screen and (max-width: 1023px)': {
      padding: '0 2rem',
      gap: '10rem',
    },
    'screen and (max-width: 839px)': {
      gap: '7.5rem',
    },
    'screen and (max-width: 599px)': {
      padding: '0 1.25rem',
      gap: '7.75rem',
    },
  },
});
