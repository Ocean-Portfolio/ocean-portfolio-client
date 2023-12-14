import { styleVariants } from '@vanilla-extract/css';
import { inlineFlexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

export const bulletVariants = styleVariants({
  SMALL: [
    inlineFlexCenter,
    {
      padding: '0.5rem 0.875rem',
      border: '1.2px solid',
      borderRadius: '3.125rem',
      textAlign: 'center',
    },
  ],
  MEDIUM: [
    inlineFlexCenter,
    {
      padding: '0.5rem 1.75rem',
      border: '1.2px solid',
      borderRadius: '3.125rem',
      textAlign: 'center',
    },
  ],
  LARGE: [
    inlineFlexCenter,
    {
      padding: '0.875rem 1.75rem',
      border: '1.2px solid',
      borderRadius: '3.125rem',
      textAlign: 'center',
    },
  ],
});

export const bulletFontVariants = styleVariants({
  LARGE: [fontVariants['title-l-bold']],
  MEDIUM: [fontVariants['title-m-bold']],
  SMALL: [fontVariants['paragraph-m-bold']],
});
