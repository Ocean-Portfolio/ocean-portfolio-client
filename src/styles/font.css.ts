import {
  GlobalStyleRule,
  globalStyle,
  styleVariants,
} from '@vanilla-extract/css';
import { ODSTextTokenVariables } from '@/const/fonts';

export const defaultFontStyles: GlobalStyleRule = {
  fontFeatureSettings: '"clig" off, "liga" off',
  fontStyle: 'normal',
  fontStretch: 'normal',
  backgroundRepeat: 'no-repeat',

  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility' as const,
};

globalStyle('*', defaultFontStyles);

export const fontVariants = styleVariants({
  'display-xl-bold': ODSTextTokenVariables['display-xl-bold'],
  'display-l-bold': ODSTextTokenVariables['display-l-bold'],
  'display-m-bold': ODSTextTokenVariables['display-m-bold'],
  'display-s-medium': ODSTextTokenVariables['display-s-medium'],
  'GNB-l-bold': ODSTextTokenVariables['GNB-l-bold'],
  'GNB-l-medium': ODSTextTokenVariables['GNB-l-medium'],
  'GNB-m-bold': ODSTextTokenVariables['GNB-m-bold'],
  'GNB-m-medium': ODSTextTokenVariables['GNB-m-medium'],
  'title-xl-bold': ODSTextTokenVariables['title-xl-bold'],
  'title-l-bold': ODSTextTokenVariables['title-l-bold'],
  'title-m-bold': ODSTextTokenVariables['title-m-bold'],
  'title-s-medium': ODSTextTokenVariables['title-s-medium'],
  'title-s-semibold': ODSTextTokenVariables['title-s-semibold'],
  'paragraph-l-bold': ODSTextTokenVariables['paragraph-l-bold'],
  'paragraph-l-semibold': ODSTextTokenVariables['paragraph-l-semibold'],
  'paragraph-l-medium': ODSTextTokenVariables['paragraph-l-medium'],
  'paragraph-m-bold': ODSTextTokenVariables['paragraph-m-bold'],
  'paragraph-m-semibold': ODSTextTokenVariables['paragraph-m-semibold'],
  'paragraph-m-medium': ODSTextTokenVariables['paragraph-m-medium'],
  'paragraph-s-medium': ODSTextTokenVariables['paragraph-s-medium'],
  'paragraph-s-regular': ODSTextTokenVariables['paragraph-s-regular'],
  'caption-m-semibold': ODSTextTokenVariables['caption-m-semibold'],
  'caption-m-medium': ODSTextTokenVariables['caption-m-medium'],
});
