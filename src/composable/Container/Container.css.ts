import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';

export const containerStyle = style({
  display: 'grid',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  gap: '15rem',

  width: '100%',
  minWidth: '17.5rem',

  padding: '0 5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      padding: '0 2rem',
      gap: '10rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      gap: '7.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      padding: '0 1.25rem',
      gap: '7.75rem',
    },
  },
});
