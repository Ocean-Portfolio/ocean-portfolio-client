import { ODSTextTokenVariables } from '@/const/fonts';
import calcRemToPx from './calcRemToPx';

const getTextStyle = (typoToken: ODSTextToken) => {
  const fontSize = ODSTextTokenVariables[typoToken].fontSize;
  const pxFontSize = calcRemToPx(fontSize);

  const lineHeight = ODSTextTokenVariables[typoToken].lineHeight;
  const pxLineHeight = calcRemToPx(lineHeight);

  const letterSpacing = ODSTextTokenVariables[typoToken].letterSpacing;
  const pxLetterSpacing = calcRemToPx(letterSpacing);

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
