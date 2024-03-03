import { createGlobalTheme } from '@vanilla-extract/css';
import { colorPaletteThemeVars } from './index.css';

const ODSColorPaletteVar = {
  'sky-cyan-100': '#CCF0FF',
  'sky-cyan-300': '#B6FFFD',
};

createGlobalTheme(':root', colorPaletteThemeVars, {
  token: ODSColorPaletteVar,
});
