import React, { PropsWithChildren } from 'react';
import GridSystem from '@/composable/GridSystem';
import Typo, { TypoProps } from '@/composable/Typo';
import { ODSTypoTokenVariables } from '@/const/fonts';

const TypoBoard = ({ children }: PropsWithChildren) => {
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

const Wrap = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const Column = ({ children }: PropsWithChildren) => {
  return (
    <Typo tag="h1" typoToken="paragraph-m-medium" colorToken="gray-scale-03">
      {children}
    </Typo>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Typo tag="span" typoToken="title-m-bold" colorToken="gray-scale-03">
        {children}
      </Typo>
      <span />
      <span />
      <span />
    </>
  );
};

interface DisplayProps {
  typoToken: TypoProps['typoToken'];
}

const Display = ({ children, typoToken }: PropsWithChildren<DisplayProps>) => {
  const fontSize =
    ODSTypoTokenVariables[typoToken || 'paragraph-m-medium'].fontSize;
  const pxFontSize = `${Number(fontSize.split('rem')[0]) * 16}px`;

  const lineHeight =
    ODSTypoTokenVariables[typoToken || 'paragraph-m-medium'].lineHeight;
  const pxLineHeight = `${Number(lineHeight.split('rem')[0]) * 16}px`;

  return (
    <>
      <TypoBoard.Info>.{typoToken}</TypoBoard.Info>
      <TypoBoard.Info>
        {fontSize} ({pxFontSize})
      </TypoBoard.Info>
      <TypoBoard.Info>
        {lineHeight} ({pxLineHeight})
      </TypoBoard.Info>
      <Typo tag="span" typoToken={typoToken}>
        {children}
      </Typo>
    </>
  );
};

const Info = ({ children }: PropsWithChildren) => {
  return (
    <Typo tag="span" typoToken="paragraph-s-medium" colorToken="gray-scale-06">
      {children}
    </Typo>
  );
};

TypoBoard.Wrap = Wrap;
TypoBoard.Column = Column;
TypoBoard.Title = Title;
TypoBoard.Display = Display;
TypoBoard.Info = Info;

export default TypoBoard;
