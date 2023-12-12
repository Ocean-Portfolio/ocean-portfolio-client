import { style, styleVariants } from '@vanilla-extract/css';
import { fontVariants } from '@/styles/font.css';
import { globalThemeVars } from '@/styles/theme.css';

const wrapStyle = style({
  borderRadius: '0.75rem',
});

export const wrapVariants = styleVariants({
  LARGE: [wrapStyle, { paddingTop: '1.5rem' }],
  MEDIUM: [wrapStyle, { paddingTop: '1.32rem' }],
  SMALL: [wrapStyle, { paddingTop: '1.25rem' }],
});

export const backgroundVariants = styleVariants({
  sungyeon: {
    backgroundColor: globalThemeVars.color['sungyeon-tertiary-200'],
  },
  yeji: {
    backgroundColor: globalThemeVars.color['sungyeon-tertiary-200'],
  },
  jaeyoon: {
    backgroundColor: globalThemeVars.color['sungyeon-tertiary-200'],
  },
});

export const sizeVariants = styleVariants({
  LARGE: {
    width: '25.5rem',
    height: '25.5rem',
  },
  MEDIUM: {
    width: '22.5rem',
    height: '22.5rem',
  },
  SMALL: {
    width: '17.5rem',
    height: '22.5rem',
  },
});

export const gapVariants = styleVariants({
  LARGE: {
    gap: '1rem',
  },
  MEDIUM: {
    gap: '0.88238rem',
  },
  SMALL: {
    gap: '1rem',
  },
});

const nameStyle = style([
  {
    whiteSpace: 'pre-wrap',
    color: globalThemeVars.color['gray-scale-00'],
  },
]);

const descriptionStyle = style([
  {
    whiteSpace: 'pre-wrap',
    color: globalThemeVars.color['gray-scale-01'],
  },
]);

export const nameVariants = styleVariants({
  LARGE: [nameStyle, fontVariants['title-m-bold'], { padding: '0 1.5rem' }],
  MEDIUM: [
    nameStyle,
    fontVariants['title-s-semibold'],
    { padding: '0 1.32rem' },
  ],
  SMALL: [
    nameStyle,
    fontVariants['paragraph-l-bold'],
    { padding: '0 1.25rem' },
  ],
});

export const descriptionVariants = styleVariants({
  LARGE: [
    descriptionStyle,
    fontVariants['paragraph-s-regular'],
    { padding: '0 1.5rem' },
  ],
  MEDIUM: [
    descriptionStyle,
    fontVariants['paragraph-s-regular'],
    { padding: '0 1.32rem' },
  ],
  SMALL: [
    descriptionStyle,
    fontVariants['paragraph-m-medium'],
    { padding: '0 1.25rem' },
  ],
});

export const periodVariants = styleVariants({
  LARGE: { marginLeft: '1.5rem' },
  MEDIUM: { marginLeft: '1.32rem' },
  SMALL: { marginLeft: '1.25rem' },
});

export const imageStyle = style({
  justifySelf: 'flex-end',
  alignSelf: 'flex-end',
  borderRadius: '0.75rem',
});
