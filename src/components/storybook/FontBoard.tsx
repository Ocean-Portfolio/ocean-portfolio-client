import React, { PropsWithChildren } from 'react';
import GridContainer from '@/composable/GridContainer/GridContainer';
import Text, { TextProps } from '@/composable/Text/Text';
import getTypoStyle from '@/utils/getTypoStyle';

const FontBoard = ({ children }: PropsWithChildren) => {
  return (
    <GridContainer
      as="div"
      style={{
        rowGap: '2rem',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
      autoFlow="row"
      templateColumns="11.25rem 7.5625rem 8.375rem 11.25rem 1fr"
    >
      {children}
    </GridContainer>
  );
};

const Column = ({ children }: PropsWithChildren) => {
  return (
    <Text as="h1" typoToken="paragraph-m-medium" colorToken="gray-scale-03">
      {children}
    </Text>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Text as="span" typoToken="title-m-bold" colorToken="gray-scale-03">
        {children}
      </Text>
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
    lineHeight,
    pxLineHeight,
    letterSpacing,
    pxLetterSpacing,
  } = getTypoStyle(typoToken || 'paragraph-l-medium');

  return (
    <>
      <FontBoard.Info>{typoToken}</FontBoard.Info>
      <FontBoard.Info>
        {fontSize} ({pxFontSize}px)
      </FontBoard.Info>
      <FontBoard.Info>
        {lineHeight} ({pxLineHeight}px)
      </FontBoard.Info>
      <FontBoard.Info>
        {letterSpacing} ({pxLetterSpacing}px)
      </FontBoard.Info>
      <Text as="span" typoToken={typoToken}>
        {children}
      </Text>
    </>
  );
};

const Info = ({ children }: PropsWithChildren) => {
  return (
    <Text as="span" typoToken="paragraph-s-medium" colorToken="gray-scale-06">
      {children}
    </Text>
  );
};

FontBoard.Column = Column;
FontBoard.Title = Title;
FontBoard.Display = Display;
FontBoard.Info = Info;

export default FontBoard;
