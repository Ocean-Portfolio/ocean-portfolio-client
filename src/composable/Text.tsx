import { CSSProperties } from '@stitches/react';
import React, { PropsWithChildren } from 'react';
import { ODSTextTokenVariables } from '@/const/fonts';
import { styled } from '../../stitches.config';

const TextBox = styled('div', {
  color: '$gray-scale-06',
  variants: {
    typoToken: {
      'display-xl-bold': ODSTextTokenVariables['display-xl-bold'],
      'display-l-bold': ODSTextTokenVariables['display-l-bold'],
      'display-m-bold': ODSTextTokenVariables['display-m-bold'],
      'display-s-medium': ODSTextTokenVariables['display-s-medium'],
      'GNB-l-bold': ODSTextTokenVariables['GNB-l-bold'],
      'GNB-l-medium': ODSTextTokenVariables['GNB-l-medium'],
      'GNB-m-bold': ODSTextTokenVariables['GNB-m-bold'],
      'GNB-m-medium': ODSTextTokenVariables['GNB-m-medium'],
      'title-xl-bold': ODSTextTokenVariables['title-xl-bold'],
      'title-l-bold': ODSTextTokenVariables['title-l-bold'],
      'title-m-bold': ODSTextTokenVariables['title-m-bold'],
      'title-s-medium': ODSTextTokenVariables['title-s-medium'],
      'title-s-semibold': ODSTextTokenVariables['title-s-semibold'],
      'paragraph-l-bold': ODSTextTokenVariables['paragraph-l-bold'],
      'paragraph-l-semibold': ODSTextTokenVariables['paragraph-l-semibold'],
      'paragraph-l-medium': ODSTextTokenVariables['paragraph-l-medium'],
      'paragraph-m-bold': ODSTextTokenVariables['paragraph-m-bold'],
      'paragraph-m-semibold': ODSTextTokenVariables['paragraph-m-semibold'],
      'paragraph-m-medium': ODSTextTokenVariables['paragraph-m-medium'],
      'paragraph-s-medium': ODSTextTokenVariables['paragraph-s-medium'],
      'paragraph-s-regular': ODSTextTokenVariables['paragraph-s-regular'],
      'caption-m-semibold': ODSTextTokenVariables['caption-m-semibold'],
      'caption-m-medium': ODSTextTokenVariables['caption-m-medium'],
    },
  },
});

export interface TextProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLTextElements> {
  css?: CSSProperties;
  tag: HTMLTextTags;
  typoToken?: ODSTextToken;
  colorToken?: ODSColorToken;
}

const Text = ({
  children,
  tag,
  css,
  typoToken,
  colorToken,
  ...rest
}: TextProps) => {
  return (
    <TextBox
      as={tag}
      css={{
        ...css,
        color: `$${colorToken}`,
      }}
      typoToken={typoToken || 'paragraph-m-medium'}
      {...rest}
    >
      {children}
    </TextBox>
  );
};

export default Text;
