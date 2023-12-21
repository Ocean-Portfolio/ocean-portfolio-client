import { style, styleVariants } from '@vanilla-extract/css';
import { ODSTextTokenVariables } from '@/const/fonts';
import { inlineFlexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';

const bulletVariables = {
  LARGE: {
    padding: '0.875rem 1.75rem',
    border: '1.2px solid',
    borderRadius: '3.125rem',
    textAlign: 'center' as const,
  },
  MEDIUM: {
    padding: '0.5rem 1.75rem',
    border: '1.2px solid',
    borderRadius: '3.125rem',
    textAlign: 'center' as const,
  },
  SMALL: {
    padding: '0.5rem 0.875rem',
    border: '1.2px solid',
    borderRadius: '3.125rem',
    textAlign: 'center' as const,
  },
};

export const bulletMediaStyle = style({
  ...bulletVariables.LARGE,
  '@media': {
    'screen and (max-width: 1023px)': bulletVariables.MEDIUM,
    'screen and (max-width: 599px)': bulletVariables.SMALL,
  },
});

export const bulletVariants = styleVariants({
  LARGE: [inlineFlexCenter, bulletVariables.LARGE],
  MEDIUM: [inlineFlexCenter, bulletVariables.MEDIUM],
  SMALL: [inlineFlexCenter, bulletVariables.SMALL],
});

export const bulletFontMediaStyle = style({
  ...ODSTextTokenVariables['title-l-bold'],
  '@media': {
    'screen and (max-width: 1023px)': ODSTextTokenVariables['title-m-bold'],
    'screen and (max-width: 599px)': ODSTextTokenVariables['paragraph-m-bold'],
  },
});

export const bulletFontVariants = styleVariants({
  LARGE: [fontVariants['title-l-bold']],
  MEDIUM: [fontVariants['title-m-bold']],
  SMALL: [fontVariants['paragraph-m-bold']],
});
