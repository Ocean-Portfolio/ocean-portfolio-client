import { style, styleVariants } from '@vanilla-extract/css';
import { fontVariants } from '@/styles/common/font.css';

const gridStyle = style({
  display: 'grid',
  gridAutoRows: 'auto auto',
});

export const gridVariants = styleVariants({
  LEFT: [
    gridStyle,
    {
      justifyItems: 'flex-start',
      gridTemplateColumns: 'auto 1fr',
    },
  ],
  RIGHT: [
    gridStyle,
    {
      justifyItems: 'flex-end',
      gridTemplateColumns: '1fr auto',
    },
  ],
});

export const gridExpeptJustifyWithSize = style({
  justifyItems: 'center',
});

export const wrapVariants = styleVariants({
  LARGE: {
    width: '66.5rem',
    columnGap: '1.5rem',
    rowGap: '1.25rem',
  },
  MEDIUM: {
    width: '48.75rem',
    columnGap: '1.5rem',
    rowGap: '1.25rem',
  },
  SMALL: {
    width: '20rem',
    columnGap: '0.75rem',
    rowGap: '0.75rem',
  },
});

export const bulletStyle = style({
  alignSelf: 'flex-end',
});

export const keywordFontVariants = styleVariants({
  LARGE: [fontVariants['title-l-bold']],
  MEDIUM: [fontVariants['title-s-medium']],
  SMALL: [fontVariants['paragraph-m-medium']],
});

export const textDirectionVariants = styleVariants({
  LEFT: {
    textAlign: 'left',
  },
  RIGHT: {
    textAlign: 'right',
  },
});

export const textExceptAlignWithSize = style({
  textAlign: 'center',
});

export const imageLayouts: {
  LARGE: ImageSizeToken;
  MEDIUM: ImageSizeToken;
  SMALL: ImageSizeToken;
} = {
  LARGE: 'image-150',
  MEDIUM: 'image-115',
  SMALL: 'image-50',
};

export const imageStyle = style({
  gridRow: '1 / 3',
  alignSelf: 'center',
});

export const imageVariants = styleVariants({
  LEFT: [imageStyle],
  RIGHT: [
    imageStyle,
    {
      gridColumn: '2 / 3',
    },
  ],
});
