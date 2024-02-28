import { style, styleVariants } from '@vanilla-extract/css';
import { userColorThemeVars } from '@/styles/theme/index.css';

export const cardStyle = style({
  display: 'inline-flex',
  flexDirection: 'column',
  backdropFilter: 'blur(8px)',
});

export const bgColorVariants = styleVariants({
  GRAY: {
    backgroundColor: 'rgba(248, 252, 253, 0.75)',
  },
  USER: {
    backgroundColor: userColorThemeVars.token['primary-variant'],
  },
});
