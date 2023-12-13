import { createTheme } from '@vanilla-extract/css';
import { userColorThemeVars } from './index.css';
import { ODSSungyeonColorVar } from './sungyeon.css';

// 메인 홈, 어드민 같은 곳에서 쓸 기본 테마

export const defaultColorTheme = createTheme(userColorThemeVars, {
  token: ODSSungyeonColorVar,
});
