import { style, styleVariants } from '@vanilla-extract/css';

export const buttonStyle = style({});

export const iconVariants = styleVariants({
  PREV: [{}],
  NEXT: [
    {
      transform: 'rotate(180deg)',
    },
  ],
});
