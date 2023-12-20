import { style } from '@vanilla-extract/css';
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
    'screen and (max-width: 940px)': {
      gap: '2.5rem',
    },
    'screen and (max-width: 599px)': {
      gap: '1.38rem',
    },
  },
});

export const titleStyle = style({
  color: userColorThemeVars.token['primary-variant'],
  ...ODSTextTokenVariables['display-l-bold'],
  '@media': {
    'screen and (max-width: 940px)': {
      color: userColorThemeVars.token['accent'],
      ...ODSTextTokenVariables['title-l-bold'],
    },
    'screen and (max-width: 599px)': {
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
    'screen and (max-width: 940px)': {
      gridTemplateColumns: '12.5rem 1fr',
      padding: '0',
    },
    'screen and (max-width: 599px)': {
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
    'screen and (max-width: 940px)': {
      width: '12.5rem',
      height: '12.5rem',
    },
    'screen and (max-width: 599px)': {
      width: 'calc(100vw - 2.5rem)',
      height: 'calc(100vw - 2.5rem)',
    },
  },
});

export const imageStyle = style({
  objectFit: 'cover',
  borderRadius: '0.75rem',
  '@media': {
    'screen and (max-width: 940px)': {
      borderRadius: '0.487rem',
    },
    'screen and (max-width: 599px)': {
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
    'screen and (max-width: 940px)': {
      ...ODSTextTokenVariables['title-s-semibold'],
    },
    'screen and (max-width: 599px)': {
      color: userColorThemeVars.token['primary-variant'],
    },
  },
});

export const sloganStyle = style({
  color: commonColorThemeVars.token['gray-scale-06'],
  ...ODSTextTokenVariables['title-xl-bold'],
  '@media': {
    'screen and (max-width: 940px)': {
      ...ODSTextTokenVariables['title-m-bold'],
    },
    'screen and (max-width: 599px)': {
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
    'screen and (max-width: 940px)': {
      ...ODSTextTokenVariables['paragraph-l-medium'],
    },
    'screen and (max-width: 720px)': {
      ...ODSTextTokenVariables['paragraph-m-medium'],
    },
    'screen and (max-width: 599px)': {
      color: userColorThemeVars.token['primary-variant'],
      ...ODSTextTokenVariables['paragraph-s-regular'],
    },
  },
});
