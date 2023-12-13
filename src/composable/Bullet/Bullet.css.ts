import { style } from '@vanilla-extract/css';
import { inlineFlexCenter } from '@/styles/common/flex.css';
import { commonColorThemeVars } from '@/styles/theme/index.css';

export const bulletStyle = style([
  inlineFlexCenter,
  {
    padding: '0.5rem 0.875rem',
    border: '1.2px solid',
    borderColor: commonColorThemeVars.token['gray-scale-00'],
    borderRadius: '3.125rem',
    textAlign: 'center',
    color: commonColorThemeVars.token['gray-scale-00'],
  },
]);
