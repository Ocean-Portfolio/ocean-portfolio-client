import React, { PropsWithChildren } from 'react';

type ExcludedTags = 'button' | 'input';

export interface TagProps
  extends React.AllHTMLAttributes<HTMLElement | SVGElement> {
  as?: Exclude<keyof JSX.IntrinsicElements, ExcludedTags>;
}

const Tag = ({
  as: Tag = 'div',
  children,
  type,
  ...props
}: PropsWithChildren<TagProps>) => {
  return <Tag {...props}>{children}</Tag>;
};

export default Tag;
