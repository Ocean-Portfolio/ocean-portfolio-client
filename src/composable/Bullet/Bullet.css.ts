import { style } from '@vanilla-extract/css';
import { inlineFlexCenter } from '@/styles/flex.css';
import { globalThemeVars } from '@/styles/theme.css';

export const bulletStyle = style([
  inlineFlexCenter,
  {
    padding: '0.5rem 0.875rem',
    border: '1.2px solid',
    borderColor: globalThemeVars.color['gray-scale-00'],
    borderRadius: '3.125rem',
    textAlign: 'center',
    color: globalThemeVars.color['gray-scale-00'],
  },
]);
