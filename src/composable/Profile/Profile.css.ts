import { style, styleVariants } from '@vanilla-extract/css';
import { fontVariants } from '@/styles/common/font.css';
import { commonColorThemeVars } from '@/styles/theme/index.css';

const commonStyle = style({
  display: 'grid',
  alignItems: 'center',
});

export const wrapVariants = styleVariants({
  HORIZONTAL: [
    commonStyle,
    {
      gridTemplateColumns: '5rem 1fr',
      gridTemplateRows: 'repeat(3, fit-content)',
      columnGap: '1rem',
    },
  ],
  VERTICAL: [
    commonStyle,
    {
      width: 'fit-content',
      gridTemplateColumns: 'fit-content',
      gridTemplateRows: 'fit-content repeat(3, fit-content))',
      justifyItems: 'center',
      rowGap: '0.25rem',
    },
  ],
});

const imageStyle = style({
  borderRadius: '6.5rem',
});

export const imageVariants = styleVariants({
  HORIZONTAL: [
    imageStyle,
    {
      gridRow: '1 / 4',
    },
  ],
  VERTICAL: [imageStyle, {}],
});

export const nameVariants = styleVariants({
  HORIZONTAL: [
    fontVariants['paragraph-m-semibold'],
    {
      color: commonColorThemeVars.token['gray-scale-00'],
    },
  ],
  VERTICAL: [
    fontVariants['GNB-l-bold'],
    {
      color: commonColorThemeVars.token['gray-scale-05'],
    },
  ],
});

export const jobVariants = styleVariants({
  HORIZONTAL: [
    fontVariants['paragraph-s-regular'],
    {
      color: commonColorThemeVars.token['gray-scale-04'],
      textAlign: 'left',
    },
  ],
  VERTICAL: [
    fontVariants['paragraph-s-regular'],
    {
      color: commonColorThemeVars.token['gray-scale-05'],
      textAlign: 'center',
    },
  ],
});

const socialWrapStyle = style({
  display: 'flex',
  padding: '0.25rem 0',
});

export const socialWrapVariants = styleVariants({
  HORIZONTAL: [
    socialWrapStyle,
    {
      gap: '0.75rem',
    },
  ],
  VERTICAL: [
    socialWrapStyle,
    {
      gap: '0.5rem',
    },
  ],
});

export const iconLayouts = {
  HORIZONTAL: {
    width: '1.5rem',
    height: '1.5rem',
  },
  VERTICAL: {
    width: '0.975rem',
    height: '0.9375rem',
  },
};
