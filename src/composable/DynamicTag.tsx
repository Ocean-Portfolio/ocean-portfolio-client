import React, { PropsWithChildren } from 'react';

type ExcludedTags = 'button' | 'input';

export interface DynamicTagProps
  extends React.AllHTMLAttributes<HTMLElement | SVGElement> {
  as: Exclude<keyof JSX.IntrinsicElements, ExcludedTags>;
}

const DynamicTag = ({
  as: Tag = 'div',
  children,
  type,
  ...props
}: PropsWithChildren<DynamicTagProps>) => {
  return <Tag {...props}>{children}</Tag>;
};

export default DynamicTag;
