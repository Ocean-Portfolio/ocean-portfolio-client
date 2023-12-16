import { style } from '@vanilla-extract/css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style([
  flexCenter,
  {
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
    height: ['100vh', '100svh'],
  },
]);

export const titleStyle = style({
  paddingBottom: '6rem',
});

export const profileListStyle = style({
  gap: '3rem',
  padding: '3.5rem',
  borderRadius: '2rem',
});
