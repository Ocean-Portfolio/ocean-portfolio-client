import { style, styleVariants } from '@vanilla-extract/css';
import { flexCenter } from '@/styles/common/flex.css';
import {
  commonColorThemeVars,
  userColorThemeVars,
} from '@/styles/theme/index.css';

export const buttonStyle = style([
  flexCenter,
  {
    gap: '0.625rem',
  },
]);

const MHOVER = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
};

const MPRESS = {
  transition: 'none',
  backgroundColor: commonColorThemeVars.token['gray-scale-00'],
  boxShadow: '0px 3px 2px 0px rgba(0, 0, 0, 0.12) inset',
};

const LHOVER = {
  border: '1.5px solid',
  borderColor: commonColorThemeVars.token['gray-scale-01'],
  color: commonColorThemeVars.token['gray-scale-01'],
  opacity: 0.8,
};

const LPRESS = {
  transition: 'none',
  borderColor: commonColorThemeVars.token['gray-scale-00'],
  color: commonColorThemeVars.token['gray-scale-00'],
  opacity: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
};

export const buttonVariants = styleVariants({
  M: [
    buttonStyle,
    {
      display: 'inline-flex',
      padding: '0.625rem 0.75rem',
      borderRadius: '0.5rem',
      backgroundColor: commonColorThemeVars.token['gray-scale-00'],
      color: userColorThemeVars.token['tertiary'],
      ':hover': MHOVER,
      ':active': MPRESS,
    },
  ],
  L: [
    buttonStyle,
    {
      padding: '0.625rem',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: commonColorThemeVars.token['gray-scale-00'],
      borderRadius: '0.25rem',
      color: commonColorThemeVars.token['gray-scale-00'],
      ':hover': LHOVER,
      ':active': LPRESS,
    },
  ],
});

export const buttonStatusVariants = styleVariants({
  MHOVER,
  MPRESS,
  LHOVER,
  LPRESS,
});
