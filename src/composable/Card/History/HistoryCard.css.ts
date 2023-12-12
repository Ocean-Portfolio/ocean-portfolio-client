import { style, styleVariants } from '@vanilla-extract/css';
import { fontVariants } from '@/styles/font.css';
import { textPreStyle } from '@/styles/text.css';

const wrapStyle = style({
  display: 'inline-flex',
  flexDirection: 'column',
  backdropFilter: 'blur(8px)',
});

export const wrapVariants = styleVariants({
  LARGE: [
    wrapStyle,
    {
      gap: '0.5rem',
      minWidth: '19.25rem',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
  ],
  SMALL: [
    wrapStyle,
    {
      gap: '0.25rem',
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(248, 252, 253, 0.75)',
    },
  ],
});

export const companyVariants = styleVariants({
  LARGE: [fontVariants['title-l-bold'], textPreStyle],
  SMALL: [fontVariants['paragraph-l-bold'], textPreStyle],
});

export const periodVariants = styleVariants({
  LARGE: [fontVariants['display-s-medium'], textPreStyle],
  SMALL: [fontVariants['paragraph-s-regular'], textPreStyle],
});
