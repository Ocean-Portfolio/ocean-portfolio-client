import { createGlobalTheme } from '@vanilla-extract/css';
import { commonColorThemeVars } from './index.css';

const ODSGrayScaleColorVar = {
  'gray-scale-00': '#ffffff',
  'gray-scale-01': '#EEF0F1',
  'gray-scale-02': '#DDE0E3',
  'gray-scale-03': '#9CA1A5',
  'gray-scale-04': '#7E858B',
  'gray-scale-05': '#525960',
  'gray-scale-06': '#1A1C1E',
};

createGlobalTheme(':root', commonColorThemeVars, {
  token: ODSGrayScaleColorVar,
});
