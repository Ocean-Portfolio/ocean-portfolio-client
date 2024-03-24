import { style } from '@vanilla-extract/css';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style([
  flexCenter,
  {
    display: 'inline-flex',
    position: 'relative',
    gap: '.75rem',
  },
]);

export const bottomSpacerStyle = style([
  backgroundColorVariants['gray-scale-00'],
  {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    opacity: 0.4,
  },
]);
