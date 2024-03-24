import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { flexCenter, flexColumn } from '@/styles/common/flex.css';

export const swiperWrapStyle = style([
  flexColumn,
  {
    display: 'flex',
    gap: '3rem',
    width: '100%',
    overflow: 'hidden',
  },
]);

export const swiperTopStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const swiperItemStyle = style({
  overflow: 'hidden',
  display: 'inline-flex',
  gap: '1.75rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gap: '1.5rem',
    },
  },
});

export const interactionBarStyle = style([
  flexCenter,
  {
    gap: '1.25rem',
  },
]);

export const buttonGroupStyle = style([
  flexCenter,
  {
    gap: '1rem',
  },
]);

export const iconVariants = styleVariants({
  PREV: [],
  NEXT: [
    {
      transform: 'rotate(180deg)',
    },
  ],
});
