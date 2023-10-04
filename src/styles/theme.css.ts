import { createGlobalTheme } from '@vanilla-extract/css';
import { ODSColorTokenVariables } from '@/const/colors';

export const globalThemeVars = createGlobalTheme(':root', {
  color: ODSColorTokenVariables,
});
