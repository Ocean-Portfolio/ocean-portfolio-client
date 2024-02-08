import { style } from '@vanilla-extract/css';
import { ODSTextTokenVariables } from '@/const/fonts';
import { commonColorThemeVars } from '@/styles/theme/index.css';

export const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
});

export const titleStyle = style({
  ...ODSTextTokenVariables['display-l-bold'],
  color: commonColorThemeVars.token['gray-scale-00'],
});

export const contentWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
});

export const emailLinkStyle = style({
  position: 'relative',
  maxWidth: 'fit-content',
  marginBottom: '3.25rem',
  ...ODSTextTokenVariables['display-l-bold'],
  color: commonColorThemeVars.token['gray-scale-00'],
});

export const descriptionStyle = style({
  position: 'absolute',
  left: '0',
  bottom: 'calc(-100% - 3.25rem)',
  ...ODSTextTokenVariables['title-l-bold'],
  fontWeight: 400,
  color: commonColorThemeVars.token['gray-scale-00'],
  cursor: 'default',
  pointerEvents: 'none',
});

export const dummyStyle = style({
  ...ODSTextTokenVariables['title-l-bold'],
  fontWeight: 400,
  color: commonColorThemeVars.token['gray-scale-00'],
  opacity: 0,
  userSelect: 'none',
});
