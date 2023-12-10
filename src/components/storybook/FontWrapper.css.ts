import { globalStyle, style } from '@vanilla-extract/css';

export const fontWrapperStyle = style({
  fontFamily: 'SUIT Variable !important',
});

globalStyle(`${fontWrapperStyle} *`, {
  fontFamily: 'SUIT Variable !important',
});
