import { createTheme } from '@vanilla-extract/css';
import { userColorThemeVars } from './index.css';

const ODSYejiColorVar = {
  primary: '#1EA2ED',
  'primary-variant': '#0E7BC1',
  secondary: '#CCF0FF',
  'secondary-variant': '#8CD5FF',
  accent: '#7F98F2',
  tertiary: '#094267',
  'tertiary-variant': '#00272F',
};

// yeji page 에 className 적용
export const yejiColorTheme = createTheme(userColorThemeVars, {
  token: ODSYejiColorVar,
});
