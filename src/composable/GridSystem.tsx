import { CSSProperties } from '@stitches/react';
import React, { PropsWithChildren } from 'react';
import { styled } from '../../stitches.config';

const GridBox = styled('div', {
  display: 'grid',
});

interface Props
  extends PropsWithChildren,
    React.AllHTMLAttributes<HTMLElement> {
  tag: HTMLAllTagNames;
  css?: CSSProperties;
  autoFlowRows?: AutoFlowProp;
  autoFlowColumns?: AutoFlowProp;
  autoRows?: string;
  autoColumns?: string;
  templateRows?: string;
  templateColumns?: string;
}

const GridSystem = ({
  children,
  tag,
  css,
  autoFlowRows,
  autoFlowColumns,
  autoRows,
  autoColumns,
  templateRows,
  templateColumns,
  ...rest
}: Props) => {
  return (
    <GridBox
      as={tag}
      css={{
        ...css,
        autoFlowRows,
        autoFlowColumns,
        autoRows,
        autoColumns,
        templateRows,
        templateColumns,
      }}
      {...rest}
    >
      {children}
    </GridBox>
  );
};

export default GridSystem;
