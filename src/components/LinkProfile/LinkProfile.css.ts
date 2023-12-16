import { style } from '@vanilla-extract/css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style([
  flexCenter,
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '1.5rem',
    borderRadius: '1rem',
    ':hover': {
      opacity: 0.65,
    },
  },
]);

export const linkStyle = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
});
