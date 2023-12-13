import { createTheme } from '@vanilla-extract/css';
import { userColorThemeVars } from './index.css';

const ODSJaeyoonColorVar = {
  primary: '#4D74D8',
  'primary-variant': '#1340B4',
  secondary: '#CADFF9',
  'secondary-variant': '#9AC0EE',
  accent: '#9E96F5',
  tertiary: '#0B2466',
  'tertiary-variant': '#021C39',
};

// jaeyoon page 에 className 적용
export const jaeyoonColorTheme = createTheme(userColorThemeVars, {
  token: ODSJaeyoonColorVar,
});
