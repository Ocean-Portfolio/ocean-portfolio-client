import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';

export const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      gap: '2.5rem',
    },
  },
});

export const articleWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});
