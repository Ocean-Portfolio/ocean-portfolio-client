import { style, styleVariants } from '@vanilla-extract/css';
import { colorVariants } from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';
import { fontVariants } from '@/styles/common/font.css';
import { commonColorThemeVars } from '@/styles/theme/index.css';

export const wrapStyle = style([
  flexCenter,
  fontVariants['paragraph-m-bold'],
  colorVariants['gray-scale-00'],
  {
    padding: '.5rem .4375rem',
    borderBottom: '.125rem solid',
    borderColor: commonColorThemeVars.token['gray-scale-00'],
    transition: 'all 0.3s ease-in-out',
  },
]);

export const wrapStyleVariants = styleVariants({
  SELECTED: [
    wrapStyle,
    {
      opacity: 1,
    },
  ],
  DEFAULT: [
    wrapStyle,
    {
      opacity: 0.4,
      borderColor: 'transparent',
    },
  ],
});
