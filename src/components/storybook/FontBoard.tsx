import React, { PropsWithChildren } from 'react';
import GridSystem from '@/composable/GridSystem';
import Text, { TextProps } from '@/composable/Text';
import { ODSTextTokenVariables } from '@/const/fonts';

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
      templateColumns="12.5rem 7.5625rem 8.375rem 1fr"
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
    </>
  );
};

interface DisplayProps {
  typoToken: TextProps['typoToken'];
}

const Display = ({ children, typoToken }: PropsWithChildren<DisplayProps>) => {
  const fontSize =
    ODSTextTokenVariables[typoToken || 'paragraph-m-medium'].fontSize;
  const pxFontSize = `${Number(fontSize.split('rem')[0]) * 16}px`;

  const lineHeight =
    ODSTextTokenVariables[typoToken || 'paragraph-m-medium'].lineHeight;
  const pxLineHeight = `${Number(lineHeight.split('rem')[0]) * 16}px`;

  return (
    <>
      <FontBoard.Info>{typoToken}</FontBoard.Info>
      <FontBoard.Info>
        {fontSize} ({pxFontSize})
      </FontBoard.Info>
      <FontBoard.Info>
        {lineHeight} ({pxLineHeight})
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
