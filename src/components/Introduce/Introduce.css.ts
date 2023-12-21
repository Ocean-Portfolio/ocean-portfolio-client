import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import {
  commonColorThemeVars,
  userColorThemeVars,
} from '@/styles/theme/index.css';

export const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      gap: '2.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      gap: '1.38rem',
    },
  },
});

export const titleStyle = style({
  color: userColorThemeVars.token['primary-variant'],
  ...ODSTextTokenVariables['display-l-bold'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      color: userColorThemeVars.token['accent'],
      ...ODSTextTokenVariables['title-l-bold'],
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      color: userColorThemeVars.token['primary-variant'],
      ...ODSTextTokenVariables['title-m-bold'],
    },
  },
});

export const bodyWrapStyle = style({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '19.25rem 1fr',
  columnGap: '2rem',
  padding: '0 6.25rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      gridTemplateColumns: '12.5rem 1fr',
      padding: '0',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
      gap: '1.38rem',
    },
  },
});

export const imageWrapStyle = style({
  position: 'relative',
  overflow: 'hidden',
  width: '19.25rem',
  height: '19.25rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      width: '12.5rem',
      height: '12.5rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      width: 'calc(100vw - 2.5rem)',
      height: 'calc(100vw - 2.5rem)',
    },
  },
});

export const imageStyle = style({
  objectFit: 'cover',
  borderRadius: '0.75rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      borderRadius: '0.487rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      borderRadius: '0.5rem',
    },
  },
});

export const articleWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'flex-start',
  gap: '1rem',
});

export const aboutMeStyle = style({
  color: commonColorThemeVars.token['gray-scale-06'],
  ...ODSTextTokenVariables['title-m-bold'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      ...ODSTextTokenVariables['title-s-semibold'],
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      color: userColorThemeVars.token['primary-variant'],
    },
  },
});

export const sloganStyle = style({
  color: commonColorThemeVars.token['gray-scale-06'],
  ...ODSTextTokenVariables['title-xl-bold'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      ...ODSTextTokenVariables['title-m-bold'],
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      ...ODSTextTokenVariables['title-s-semibold'],
      color: userColorThemeVars.token['primary-variant'],
    },
  },
});

export const introTextStyle = style({
  color: commonColorThemeVars.token['gray-scale-06'],
  fontSize: '1.375rem',
  fontWeight: '400',
  lineHeight: '2.125rem',
  letterSpacing: '-0.00625rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      ...ODSTextTokenVariables['paragraph-l-medium'],
    },
    [ODSBreakpointTokenVariables['breakpoint-m']]: {
      ...ODSTextTokenVariables['paragraph-m-medium'],
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      color: userColorThemeVars.token['primary-variant'],
      ...ODSTextTokenVariables['paragraph-s-regular'],
    },
  },
});
