import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import { globalThemeVars } from '@/styles/theme.css';
import Tag, { TagProps } from '../Tag/Tag';

export interface TextProps extends PropsWithChildren, TagProps {
  typoToken?: ODSTextToken;
  colorToken?: ODSColorToken;
}

const Text = ({ children, typoToken, colorToken, ...rest }: TextProps) => {
  const color = globalThemeVars.color[colorToken || 'gray-scale-06'];

  return (
    <Tag
      className={fontVariants[typoToken || 'paragraph-m-medium']}
      style={{
        color: `${color || rest.style?.color}`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
