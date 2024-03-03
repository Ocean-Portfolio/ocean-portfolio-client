// Color

interface GrayScaleTokenInterface {
  'gray-scale-00': string;
  'gray-scale-01': string;
  'gray-scale-02': string;
  'gray-scale-03': string;
  'gray-scale-04': string;
  'gray-scale-05': string;
  'gray-scale-06': string;
}

type GrayScaleToken =
  | 'gray-scale-00'
  | 'gray-scale-01'
  | 'gray-scale-02'
  | 'gray-scale-03'
  | 'gray-scale-04'
  | 'gray-scale-05'
  | 'gray-scale-06';

interface ColorPaletteTokenInterface {
  'sky-cyan-100': string;
  'sky-cyan-300': string;
}

type ColorPaletteToken = 'sky-cyan-100' | 'sky-cyan-300';

interface UserColorThemeTokenInterface {
  primary: string;
  'primary-variant': string;
  secondary: string;
  'secondary-variant': string;
  accent: string;
  tertiary: string;
  'tertiary-variant': string;
}

type UserColorThemeToken =
  | 'primary'
  | 'primary-variant'
  | 'secondary'
  | 'secondary-variant'
  | 'accent'
  | 'tertiary'
  | 'tertiary-variant';
