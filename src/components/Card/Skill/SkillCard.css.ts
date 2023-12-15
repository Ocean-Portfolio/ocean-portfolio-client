import { style, styleVariants } from '@vanilla-extract/css';
import { colorVariants } from '@/styles/common/color.css';
import { inlineFlexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

const wrapStyle = style([
  inlineFlexCenter,
  {
    gap: '0.5rem',
  },
]);

export const wrapVariants = styleVariants({
  LARGE: [
    wrapStyle,
    {
      flexDirection: 'column',
    },
  ],
  MEDIUM: [
    wrapStyle,
    {
      flexDirection: 'column',
    },
  ],
  SMALL: [
    wrapStyle,
    {
      padding: '0.625rem',
      borderRadius: '0.25rem',
      backgroundColor: 'rgba(239, 254, 255, 0.30)',
    },
  ],
});

export const pictureVariants = styleVariants({
  LARGE: {
    padding: '0.9375rem',
    borderRadius: '0.25rem',
    border: '1.2px solid rgba(239, 254, 255, 0.20)',
    backgroundColor: 'rgba(239, 254, 255, 0.20)',
  },
  MEDIUM: {
    padding: '0.625rem',
    borderRadius: '0.25rem',
    border: '1.2px solid rgba(239, 254, 255, 0.20)',
    backgroundColor: 'rgba(239, 254, 255, 0.20)',
  },
  SMALL: {},
});

export const imageVariants = {
  LARGE: {
    width: '5.625rem',
    height: '5.625rem',
  },
  MEDIUM: {
    width: '3.625rem',
    height: '3.625rem',
  },
  SMALL: {
    width: '1.5rem',
    height: '1.5rem',
  },
};

const captionStyle = style({
  textAlign: 'center',
});

export const captionVariants = styleVariants({
  LARGE: [
    captionStyle,
    fontVariants['paragraph-l-medium'],
    colorVariants['gray-scale-00'],
  ],
  MEDIUM: [
    captionStyle,
    fontVariants['caption-m-semibold'],
    colorVariants['gray-scale-00'],
  ],
  SMALL: [
    captionStyle,
    fontVariants['paragraph-m-medium'],
    colorVariants['gray-scale-06'],
  ],
});
