import { style } from '@vanilla-extract/css';
import { inlineFlexCenter } from '@/styles/common/flex.css';
import { commonColorThemeVars } from '@/styles/theme/index.css';

export const chipStyle = style([
  inlineFlexCenter,
  {
    width: 'fit-content',
    height: 'fit-content',
    padding: '0.25rem 1rem',
    borderRadius: '1.952rem',
    color: commonColorThemeVars.token['gray-scale-00'],
  },
]);
