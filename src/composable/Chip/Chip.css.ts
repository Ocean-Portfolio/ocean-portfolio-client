import { style, styleVariants } from '@vanilla-extract/css';
import { ODSColorTokenVariables } from '@/const/colors';
import { inlineFlexCenter } from '@/styles/flex.css';
import { globalThemeVars } from '@/styles/theme.css';

const chipStyle = style([
  inlineFlexCenter,
  {
    padding: '0.25rem 1rem',
    borderRadius: '1.952rem',
    color: globalThemeVars.color['gray-scale-00'],
  },
]);

export const chipVariants = styleVariants(ODSColorTokenVariables, (color) => [
  chipStyle,
  { backgroundColor: color },
]);
