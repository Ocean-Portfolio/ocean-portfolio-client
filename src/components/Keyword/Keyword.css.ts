import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { ODSImageTokenVariables } from '@/const/images';
import { fontVariants } from '@/styles/common/font.css';

const gridStyle = style({
  display: 'grid',
  gridTemplateRows: 'auto auto',
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

const wrapVariables = {
  LARGE: {
    columnGap: '1.5rem',
    rowGap: '1.25rem',
  },
  MEDIUM: {
    columnGap: '1.5rem',
    rowGap: '1.25rem',
  },
  SMALL: {
    columnGap: '0.75rem',
    rowGap: '0.75rem',
  },
};

export const wrapMediaStyle = style({
  ...wrapVariables.LARGE,
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]: wrapVariables.MEDIUM,
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      ...wrapVariables.SMALL,
      justifyItems: 'center',
    },
  },
});

export const wrapVariants = styleVariants({
  LARGE: wrapVariables.LARGE,
  MEDIUM: wrapVariables.MEDIUM,
  SMALL: wrapVariables.SMALL,
});

export const bulletStyle = style({
  alignSelf: 'flex-end',
});

export const keywordFontMediaStyle = style({
  ...ODSTextTokenVariables['title-l-bold'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]:
      ODSTextTokenVariables['title-m-bold'],
    [ODSBreakpointTokenVariables['breakpoint-s']]: {
      ...ODSTextTokenVariables['paragraph-m-bold'],
      textAlign: 'center',
    },
  },
});

export const keywordFontVariants = styleVariants({
  LARGE: [fontVariants['title-l-bold']],
  MEDIUM: [fontVariants['title-s-medium']],
  SMALL: [fontVariants['paragraph-m-medium']],
});
export const textDirectionVariants = styleVariants({
  LEFT: {
    gridRow: '2 / 3',
    gridColumn: '2 / 3',
    textAlign: 'left',
  },
  RIGHT: {
    gridRow: '2 / 3',
    textAlign: 'right',
  },
});

export const imageMediaStyle = style({
  position: 'relative',
  ...ODSImageTokenVariables['image-150'],
  '@media': {
    [ODSBreakpointTokenVariables['breakpoint-xl']]:
      ODSImageTokenVariables['image-115'],
    [ODSBreakpointTokenVariables['breakpoint-s']]:
      ODSImageTokenVariables['image-50'],
  },
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
  alignSelf: 'center',
});

export const imageVariants = styleVariants({
  LEFT: [
    imageStyle,
    {
      gridRow: '1 / 3',
    },
  ],
  RIGHT: [
    imageStyle,
    {
      gridRow: '1 / 3',
      gridColumn: '2 / 3',
    },
  ],
});
