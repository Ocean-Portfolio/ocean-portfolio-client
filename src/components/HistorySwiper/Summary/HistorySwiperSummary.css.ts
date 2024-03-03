import { style } from '@vanilla-extract/css';
import { flexColumn } from '@/styles/common/flex.css';

export const wrapStyle = style([]);

export const topStyle = style([
  flexColumn,
  {
    gap: '0.75rem',
  },
]);

export const gapStyle = style({
  gap: '0.75rem',
});

export const slideStyle = style([
  gapStyle,
  {
    display: 'flex',
  },
]);
