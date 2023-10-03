import { CSSProperties } from '@stitches/react';
import React, { PropsWithChildren } from 'react';
import { ODSTypoTokenVariables } from '@/const/fonts';
import { styled } from '../../stitches.config';

const TypoBox = styled('div', {
  color: '$gray-scale-06',
  variants: {
    typoToken: {
      'display-xl-bold': ODSTypoTokenVariables['display-xl-bold'],
      'display-l-bold': ODSTypoTokenVariables['display-l-bold'],
      'display-m-bold': ODSTypoTokenVariables['display-m-bold'],
      'display-s-medium': ODSTypoTokenVariables['display-s-medium'],
      'GNB-l-bold': ODSTypoTokenVariables['GNB-l-bold'],
      'GNB-l-medium': ODSTypoTokenVariables['GNB-l-medium'],
      'GNB-m-bold': ODSTypoTokenVariables['GNB-m-bold'],
      'GNB-m-medium': ODSTypoTokenVariables['GNB-m-medium'],
      'title-xl-bold': ODSTypoTokenVariables['title-xl-bold'],
      'title-l-bold': ODSTypoTokenVariables['title-l-bold'],
      'title-m-bold': ODSTypoTokenVariables['title-m-bold'],
      'title-s-medium': ODSTypoTokenVariables['title-s-medium'],
      'title-s-semibold': ODSTypoTokenVariables['title-s-semibold'],
      'paragraph-l-bold': ODSTypoTokenVariables['paragraph-l-bold'],
      'paragraph-l-semibold': ODSTypoTokenVariables['paragraph-l-semibold'],
      'paragraph-l-medium': ODSTypoTokenVariables['paragraph-l-medium'],
      'paragraph-m-bold': ODSTypoTokenVariables['paragraph-m-bold'],
      'paragraph-m-semibold': ODSTypoTokenVariables['paragraph-m-semibold'],
      'paragraph-m-medium': ODSTypoTokenVariables['paragraph-m-medium'],
      'paragraph-s-medium': ODSTypoTokenVariables['paragraph-s-medium'],
      'paragraph-s-regular': ODSTypoTokenVariables['paragraph-s-regular'],
      'caption-m-semibold': ODSTypoTokenVariables['caption-m-semibold'],
      'caption-m-medium': ODSTypoTokenVariables['caption-m-medium'],
    },
  },
});

export interface TypoProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLTextElements> {
  css?: CSSProperties;
  tag: HTMLTextTags;
  typoToken?: ODSTypoToken;
  colorToken?: ODSColorToken;
}

const Typo = ({
  children,
  tag,
  css,
  typoToken,
  colorToken,
  ...rest
}: TypoProps) => {
  return (
    <TypoBox
      as={tag}
      css={{
        ...css,
        color: `$${colorToken}`,
      }}
      typoToken={typoToken || 'paragraph-m-medium'}
      {...rest}
    >
      {children}
    </TypoBox>
  );
};

export default Typo;
