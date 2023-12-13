import { createTheme } from '@vanilla-extract/css';
import { userColorThemeVars } from './index.css';

export const ODSSungyeonColorVar = {
  primary: '#5AAAB7',
  'primary-variant': '#276196',
  secondary: '#B5EBED',
  'secondary-variant': '#E3F6FF',
  accent: '#0D464F',
  tertiary: '#3B5D76',
  'tertiary-variant': '#0F2332',
};

// sungyeon page 에 className 적용
export const sungyeonColorTheme = createTheme(userColorThemeVars, {
  token: ODSSungyeonColorVar,
});
