import React, { PropsWithChildren } from 'react';

export type ExcludedTags = 'input';

export interface TagProps
  extends React.AllHTMLAttributes<HTMLElement | SVGElement> {
  as?: Exclude<keyof JSX.IntrinsicElements, ExcludedTags>;
}

const Tag = ({
  as: Tag = 'div',
  children,
  className,
  type,
  ...props
}: PropsWithChildren<TagProps>) => {
  return (
    <Tag className={`${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Tag;
