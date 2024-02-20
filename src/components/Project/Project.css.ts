import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';

export const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '5rem',

  height: '100%',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gap: '2.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      gap: '0',
    },
  },
});
