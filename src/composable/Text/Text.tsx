import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import Tag, { TagProps } from '../Tag/Tag';
import { textStyle } from './Text.css';

export interface TextProps extends PropsWithChildren, TagProps {
  typoToken?: ODSTextToken;
}

const Text = ({ children, typoToken, ...rest }: TextProps) => {
  return (
    <Tag
      className={`${
        fontVariants[typoToken || 'paragraph-m-medium']
      } ${textStyle}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
