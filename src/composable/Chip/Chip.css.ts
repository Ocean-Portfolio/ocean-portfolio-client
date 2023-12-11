import { style } from '@vanilla-extract/css';
import { inlineFlexCenter } from '@/styles/flex.css';
import { globalThemeVars } from '@/styles/theme.css';

export const chipStyle = style([
  inlineFlexCenter,
  {
    padding: '0.25rem 1rem',
    borderRadius: '1.952rem',
    backgroundColor: '#3B5D76',
    color: globalThemeVars.color['gray-scale-00'],
  },
]);
