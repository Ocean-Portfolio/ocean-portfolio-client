import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/common/font.css';
import Tag, { TagProps } from '../Tag/Tag';

export interface TextProps extends PropsWithChildren, TagProps {
  typoToken?: ODSTextToken;
}

const Text = ({ children, className, typoToken, ...rest }: TextProps) => {
  return (
    <Tag
      className={classNames(
        className,
        fontVariants[typoToken || 'paragraph-m-medium'],
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
