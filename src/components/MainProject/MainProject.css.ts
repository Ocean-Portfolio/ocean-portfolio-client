import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

export const wrapStyle = style([
  flexCenter,
  {
    position: 'relative',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '0 4.69rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        padding: '0',
      },
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        padding: '0 0.69rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        flexDirection: 'column',
        padding: '0',
      },
    },
  },
]);

export const wrapVariants = styleVariants({
  DESKTOP: {
    minHeight: '31.25rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        minHeight: '31.61455rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        minHeight: '20rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '4rem',
        height: '100%',
        paddingTop: '1.37rem',
      },
    },
  },
  MOBILE: {
    height: '33.5625rem',
    gap: '5rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        gap: '3rem',
        height: '19.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gap: '1.25rem',
        height: 'auto',
        paddingTop: '1.25rem',
      },
    },
  },
});

const mockWrapStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const mockWrapVariants = styleVariants({
  DESKTOP: [
    mockWrapStyle,
    {
      minWidth: '24.375rem',

      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-xl']]: {
          minWidth: '16.5625rem',
        },
        [ODSBreakpointTokenVariables['breakpoint-m']]: {
          minWidth: '15.5625rem',
        },
        [ODSBreakpointTokenVariables['breakpoint-s']]: {
          gap: '0',
          minWidth: '20rem',
          height: '20rem',
        },
      },
    },
  ],
  MOBILE: [
    mockWrapStyle,
    {
      overflow: 'hidden',
      minWidth: '19.375rem',
      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-l']]: {
          width: '11.25rem',
        },
        [ODSBreakpointTokenVariables['breakpoint-s']]: {
          width: '15rem',
          justifyContent: 'center',
        },
      },
    },
  ],
});

const backgroundGradientStyle = style({
  position: 'absolute',
  right: '0',
  zIndex: '10',
});

export const backgroundGradientVariants = styleVariants({
  DESKTOP: [
    backgroundGradientStyle,
    {
      background:
        'linear-gradient(270deg, transparent 0%, rgba(1, 65, 124, 0.00) 76.5%, #276196 100%)',
    },
  ],
  MOBILE: [
    backgroundGradientStyle,
    {
      bottom: '-50%',
      background:
        'linear-gradient(0deg, #276196 54.16%, rgba(1, 65, 124, 0.00) 100%, #276196 100%)',
      '@media': {
        [ODSBreakpointTokenVariables['breakpoint-s']]: {
          right: 'initial',
        },
      },
    },
  ],
});

export const mockStyle = style({
  position: 'absolute',
  right: '0',
});

export const mockVariants = styleVariants({
  DESKTOP: {
    width: '54.875rem',
    height: '31.25rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-xl']]: {
        height: '31.61455rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        width: '34.625rem',
        height: '20rem',
      },
    },
  },
  MOBILE: {
    width: '19.375rem',
    height: '33.5625rem',

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]: {
        width: '11.25rem',
        height: '19.5rem',
      },
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        width: '15rem',
        height: '26rem',

        '&:not(div)': {
          position: 'initial',
        },
      },
    },
  },
});

export const contentWrapStyle = style({
  display: 'grid',
  gridAutoFlow: 'row',
  gridAutoRows: 'auto',
  justifyContent: 'center',
  rowGap: '1.5rem',

  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      rowGap: '1rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'center',
      rowGap: '0.5rem',
      columnGap: '0.5rem',
    },
  },
});

export const titleStyle = style([
  colorVariants['gray-scale-02'],
  fontVariants['title-l-bold'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]:
        ODSTextTokenVariables['GNB-l-bold'],
    },
  },
]);

export const periodStyle = style([
  colorVariants['secondary-variant'],
  fontVariants['title-s-medium'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-m']]:
        ODSTextTokenVariables['paragraph-m-bold'],
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        fontSize: '0.75rem',
        fontWeight: '700',
        lineHeight: '1.125rem',
        letterSpacing: '-0.00625rem',
      },
    },
  },
]);

export const descriptionStyle = style([
  colorVariants['gray-scale-00'],
  fontVariants['paragraph-l-medium'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-m']]:
        ODSTextTokenVariables['paragraph-l-semibold'],
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        ...ODSTextTokenVariables['paragraph-m-medium'],
        gridColumn: '1/3',
      },
    },
  },
]);

export const buttonStyle = style([
  colorVariants['tertiary'],
  fontVariants['display-s-medium'],
  {
    width: '15rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        gridColumn: '1/3',
        width: 'fit-content',
        padding: '0.5rem 2.44rem !important',
      },
    },
  },
]);
