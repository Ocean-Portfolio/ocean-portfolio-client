import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';

export const topStyle = style({
  display: 'flex',
  alignItems: 'center',
  height: '2.75rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '2.25rem',
      paddingBottom: '0.625rem',
    },
  },
});

export const slideStyle = style({
  display: 'grid !important',
  gridTemplateColumns: '1fr 19.5rem',
  rowGap: '0.0625rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr auto',
      rowGap: '0',
      columnGap: '0.0625rem',
    },
  },
});

export const slideStyleVariants = styleVariants({
  0: [slideStyle],
  1: [
    slideStyle,
    {
      gridTemplateRows: '1fr',
      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-l']]: {
          gridTemplateColumns: '1fr',
        },
      },
    },
  ],
  2: [
    slideStyle,
    {
      gridTemplateRows: '1fr 1fr',
      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-l']]: {
          gridTemplateColumns: '50% 50%',
        },
      },
    },
  ],
});

export const detailStyle = style({
  gridColumn: '1 / 2',
  gridRow: '1 / 3',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
    },
  },
});

export const impactStyle = style({
  gridColumn: '2 / 3',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gridColumn: 'auto',
      gridRow: '2 / 3',
    },
  },
});

export const iconVariants = styleVariants({
  PREV: [],
  NEXT: [
    {
      transform: 'rotate(180deg)',
    },
  ],
});
