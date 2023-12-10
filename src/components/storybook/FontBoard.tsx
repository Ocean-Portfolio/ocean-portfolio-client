import React, { PropsWithChildren } from 'react';
import Grid from '@/composable/Grid/Grid';
import Text, { TextProps } from '@/composable/Text/Text';
import { globalThemeVars } from '@/styles/theme.css';
import getTextStyle from '@/utils/style/getTextStyle';

const FontBoard = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      as="div"
      style={{
        rowGap: '2rem',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
      autoFlow="row"
      templateColumns="11.25rem 7.5625rem 8.375rem 11.25rem 11.25rem 1fr"
    >
      {children}
    </Grid>
  );
};

const Column = ({ children }: PropsWithChildren) => {
  return (
    <Text
      as="h1"
      style={{
        color: globalThemeVars.color['gray-scale-03'],
      }}
      typoToken="paragraph-m-medium"
    >
      {children}
    </Text>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Text
        as="span"
        typoToken="title-m-bold"
        style={{
          color: globalThemeVars.color['gray-scale-03'],
        }}
      >
        {children}
      </Text>
      <span />
      <span />
      <span />
      <span />
      <span />
    </>
  );
};

interface DisplayProps {
  typoToken: TextProps['typoToken'];
}

const Display = ({ children, typoToken }: PropsWithChildren<DisplayProps>) => {
  const {
    fontSize,
    pxFontSize,
    fontWeight,
    lineHeight,
    pxLineHeight,
    letterSpacing,
    pxLetterSpacing,
  } = getTextStyle(typoToken || 'paragraph-l-medium');

  return (
    <>
      <FontBoard.Info>{typoToken}</FontBoard.Info>
      <FontBoard.Info>
        {fontSize} ({pxFontSize}px)
      </FontBoard.Info>
      <FontBoard.Info>{fontWeight}</FontBoard.Info>
      <FontBoard.Info>
        {lineHeight} ({pxLineHeight}px)
      </FontBoard.Info>
      <FontBoard.Info>
        {letterSpacing} ({pxLetterSpacing}px)
      </FontBoard.Info>
      <Text
        as="span"
        typoToken={typoToken}
        style={{
          color: globalThemeVars.color['gray-scale-06'],
        }}
      >
        {children}
      </Text>
    </>
  );
};

const Info = ({ children }: PropsWithChildren) => {
  return (
    <Text
      as="span"
      typoToken="paragraph-s-medium"
      style={{
        color: globalThemeVars.color['gray-scale-06'],
      }}
    >
      {children}
    </Text>
  );
};

FontBoard.Column = Column;
FontBoard.Title = Title;
FontBoard.Display = Display;
FontBoard.Info = Info;

export default FontBoard;
