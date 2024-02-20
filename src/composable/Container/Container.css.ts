import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';

export const containerStyle = style({
  overflowX: 'hidden',

  display: 'grid',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  gap: '15rem',

  maxWidth: '100vw',
  minWidth: '17.5rem',

  padding: '0 5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      padding: '0 5rem',
      gap: '10rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      padding: '0 2rem',
      gap: '7.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      padding: '0 1.25rem',
      gap: '7.75rem',
    },
  },
});
