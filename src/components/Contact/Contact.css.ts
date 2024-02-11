import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
import { textPreStyle } from '@/styles/common/text.css';

export const wrapStyle = style([
  colorVariants['gray-scale-00'],
  {
    display: 'flex',
    flexDirection: 'column',
  },
]);

export const titleStyle = style([
  fontVariants['title-l-bold'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]:
        ODSTextTokenVariables['title-m-bold'],
    },
  },
]);

export const contentWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  paddingTop: '5rem',
  paddingBottom: '3.5rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-l']]: {
      gap: '1.5rem',
      paddingTop: '3rem',
      paddingBottom: '2rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      gap: '1rem',
      paddingTop: '2.5rem',
      paddingBottom: '1.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      gap: '1.5rem',
      paddingTop: '1.5rem',
      paddingBottom: '0.5rem',
    },
  },
});

export const emailLinkStyle = style([
  fontVariants['display-l-bold'],
  {
    maxWidth: 'fit-content',
    textDecoration: 'underline',
    color: 'inherit',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]:
        ODSTextTokenVariables['display-m-bold'],
      [ODSBreakpointTokenVariables['breakpoint-s']]:
        ODSTextTokenVariables['title-m-bold'],
    },
  },
]);

export const descriptionStyle = style([
  textPreStyle,
  fontVariants['paragraph-l-medium'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]:
        ODSTextTokenVariables['paragraph-m-medium'],
    },
  },
]);

export const sendStyle = style([
  {
    width: '17.5rem',
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-s']]: {
        width: '100%',
      },
    },
  },
]);
