import { globalStyle } from '@vanilla-extract/css';
import { globalThemeVars } from './theme.css';

globalStyle('*', {
  fontFamily: 'SUIT Variable',
  color: globalThemeVars.color['gray-scale-00'],
});
