import { globalStyle } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  transition: 'all 0.2s ease-in-out',

  fontFeatureSettings: '"clig" off, "liga" off',
  fontStyle: 'normal',
  fontStretch: 'normal',
  backgroundRepeat: 'no-repeat',

  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
});

globalStyle('*::webkit-scrollbar', {
  display: 'none',
});

globalStyle('html::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('html, body', {
  maxWidth: '100vw',
});

globalStyle('main', {});

globalStyle('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: 'none',
  color: 'inherit',
});

globalStyle('section', {
  width: '100%',
  maxWidth: '80rem',
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: {
      maxWidth: '64rem',
    },
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      maxWidth: '20rem',
    },
  },
});

globalStyle('a', {
  textDecoration: 'none',
});
