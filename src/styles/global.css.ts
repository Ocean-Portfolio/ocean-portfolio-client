import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  transition: 'all 0.2s ease-in-out',
});

globalStyle('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
});
