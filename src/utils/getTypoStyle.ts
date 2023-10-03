import { ODSTextTokenVariables } from '@/const/fonts';

const getTypoStyle = (typoToken: ODSTextToken) => {
  const fontSize = ODSTextTokenVariables[typoToken].fontSize;
  const pxFontSize = Number(fontSize.split('rem')[0]) * 16;

  const lineHeight = ODSTextTokenVariables[typoToken].lineHeight;
  const pxLineHeight = Number(lineHeight.split('rem')[0]) * 16;

  const letterSpacing = ODSTextTokenVariables[typoToken].letterSpacing;
  const pxLetterSpacing = Number(letterSpacing.split('rem')[0]) * 16;

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

export default getTypoStyle;
