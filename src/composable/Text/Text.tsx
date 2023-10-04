import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import { globalThemeVars } from '@/styles/theme.css';
import DynamicTag, { DynamicTagProps } from '../DynamicTag';

export interface TextProps extends PropsWithChildren, DynamicTagProps {
  typoToken?: ODSTextToken;
  colorToken?: ODSColorToken;
}

const Text = ({ children, typoToken, colorToken, ...rest }: TextProps) => {
  return (
    <DynamicTag
      className={fontVariants[typoToken || 'paragraph-m-medium']}
      style={{
        color: `${globalThemeVars.color[colorToken || 'gray-scale-06']}`,
      }}
      {...rest}
    >
      {children}
    </DynamicTag>
  );
};

export default Text;
