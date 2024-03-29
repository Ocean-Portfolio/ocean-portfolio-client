import {
  createGlobalThemeContract,
  createThemeContract,
} from '@vanilla-extract/css';

const ODSGrayScaleTokens = {
  'gray-scale-00': 'gray-scale-00',
  'gray-scale-01': 'gray-scale-01',
  'gray-scale-02': 'gray-scale-02',
  'gray-scale-03': 'gray-scale-03',
  'gray-scale-04': 'gray-scale-04',
  'gray-scale-05': 'gray-scale-05',
  'gray-scale-06': 'gray-scale-06',
};

const ODSColorPaletteTokens = {
  'sky-cyan-100': 'sky-cyan-100',
  'sky-cyan-300': 'sky-cyan-300',
};

const ODSUserColorTokens = {
  primary: '',
  'primary-variant': '',
  secondary: '',
  'secondary-variant': '',
  accent: '',
  tertiary: '',
  'tertiary-variant': '',
};

export const ODSColorTokenVariables = {
  ...ODSGrayScaleTokens,
  ...ODSColorPaletteTokens,
  ...ODSUserColorTokens,
};

export const ODSUserColorKeyList = Object.keys(ODSUserColorTokens) as Array<
  keyof typeof ODSUserColorTokens
>;

export const commonColorThemeVars = createGlobalThemeContract({
  token: ODSGrayScaleTokens,
});

export const colorPaletteThemeVars = createGlobalThemeContract({
  token: ODSColorPaletteTokens,
});

export const userColorThemeVars = createThemeContract({
  token: ODSUserColorTokens,
});
