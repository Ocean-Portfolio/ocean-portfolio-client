import { createGlobalTheme } from '@vanilla-extract/css';
import { colorPaletteThemeVars } from './index.css';

const ODSColorPaletteVar = {
  'sky-cyan-100': '#CCF0FF',
};

createGlobalTheme(':root', colorPaletteThemeVars, {
  token: ODSColorPaletteVar,
});
