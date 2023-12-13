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

export const commonColorThemeVars = createGlobalThemeContract({
  token: ODSGrayScaleTokens,
});

const ODSUserColorTokens = {
  primary: '',
  'primary-variant': '',
  secondary: '',
  'secondary-variant': '',
  accent: '',
  tertiary: '',
  'tertiary-variant': '',
};

export const userColorThemeVars = createThemeContract({
  token: ODSUserColorTokens,
});

export const ODSUserColorKeyList = Object.keys(ODSUserColorTokens) as Array<
  keyof typeof ODSUserColorTokens
>;
