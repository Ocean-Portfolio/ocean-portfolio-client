import { globalStyle, style } from '@vanilla-extract/css';

export const testStyles = style({
  color: 'green',
  fontSize: '30px',
  backgroundColor: 'red',
});

globalStyle('p', {
  color: 'red',
});

globalStyle('li', {
  color: 'blue',
  listStyle: 'inside',
});

globalStyle('strong', {
  color: 'gray',
});
