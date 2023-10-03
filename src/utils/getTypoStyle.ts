import { ODSTypoTokenVariables } from '@/const/fonts';

const getTypoStyle = (typoToken: ODSTypoToken) => {
  const fontSize = ODSTypoTokenVariables[typoToken].fontSize;
  const pxFontSize = Number(fontSize.split('rem')[0]) * 16;

  const lineHeight = ODSTypoTokenVariables[typoToken].lineHeight;
  const pxLineHeight = Number(lineHeight.split('rem')[0]) * 16;

  return {
    token: typoToken,
    fontSize,
    pxFontSize,
    lineHeight,
    pxLineHeight,
    fontWeight: ODSTypoTokenVariables[typoToken].fontWeight,
  };
};

export default getTypoStyle;
