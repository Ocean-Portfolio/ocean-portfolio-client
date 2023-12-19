import { style } from '@vanilla-extract/css';
import { flexCenter } from './common/flex.css';

export const mainContainerStyle = style([
  flexCenter,
  {
    flexDirection: 'column',
    gap: '15rem',
    '@media': {
      'screen and (max-width: 768px)': {
        gap: '7.5rem',
      },
      'screen and (max-width: 390px)': {
        gap: '7.75rem',
      },
    },
  },
]);
