import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import { globalThemeVars } from '@/styles/theme.css';
import DynamicTag, { DynamicTagProps } from '../DynamicTag';

export interface TextProps extends PropsWithChildren, DynamicTagProps {
  typoToken?: ODSTextToken;
  colorToken?: ODSColorToken;
}

const Text = ({ children, typoToken, colorToken, ...rest }: TextProps) => {
  const color =
    process.env.NODE_ENV === 'test'
      ? `var(--${colorToken})`
      : globalThemeVars.color[colorToken || 'gray-scale-06'];

  return (
    <DynamicTag
      className={fontVariants[typoToken || 'paragraph-m-medium']}
      style={{
        color: `${color || rest.style?.color}`,
      }}
      {...rest}
    >
      {children}
    </DynamicTag>
  );
};

export default Text;
