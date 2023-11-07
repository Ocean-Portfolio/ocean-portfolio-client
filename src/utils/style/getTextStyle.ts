import { ODSTextTokenVariables } from '@/const/fonts';
import calcRemToPxNumber from './calcRemToPxNumber';

const getTextStyle = (typoToken: ODSTextToken) => {
  const fontSize = ODSTextTokenVariables[typoToken].fontSize;
  const pxFontSize = calcRemToPxNumber(fontSize);

  const lineHeight = ODSTextTokenVariables[typoToken].lineHeight;
  const pxLineHeight = calcRemToPxNumber(lineHeight);

  const letterSpacing = ODSTextTokenVariables[typoToken].letterSpacing;
  const pxLetterSpacing = calcRemToPxNumber(letterSpacing);

  return {
    token: typoToken,
    fontSize,
    pxFontSize,
    lineHeight,
    pxLineHeight,
    letterSpacing,
    pxLetterSpacing,
    fontWeight: ODSTextTokenVariables[typoToken].fontWeight,
  };
};

export default getTextStyle;
