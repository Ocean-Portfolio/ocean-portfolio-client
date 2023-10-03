import React, { PropsWithChildren } from 'react';
import GridSystem from '@/composable/GridSystem';
import Text, { TextProps } from '@/composable/Text';
import getTypoStyle from '@/utils/getTypoStyle';

const FontBoard = ({ children }: PropsWithChildren) => {
  return (
    <GridSystem
      tag="div"
      css={{
        rowGap: '2rem',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
      autoFlowRows
      templateColumns="11.25rem 7.5625rem 8.375rem 11.25rem 1fr"
    >
      {children}
    </GridSystem>
  );
};

const Column = ({ children }: PropsWithChildren) => {
  return (
    <Text tag="h1" typoToken="paragraph-m-medium" colorToken="gray-scale-03">
      {children}
    </Text>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Text tag="span" typoToken="title-m-bold" colorToken="gray-scale-03">
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
      <Text tag="span" typoToken={typoToken}>
        {children}
      </Text>
    </>
  );
};

const Info = ({ children }: PropsWithChildren) => {
  return (
    <Text tag="span" typoToken="paragraph-s-medium" colorToken="gray-scale-06">
      {children}
    </Text>
  );
};

FontBoard.Column = Column;
FontBoard.Title = Title;
FontBoard.Display = Display;
FontBoard.Info = Info;

export default FontBoard;
