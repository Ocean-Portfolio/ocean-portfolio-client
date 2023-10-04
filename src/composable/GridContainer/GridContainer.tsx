import React, { PropsWithChildren } from 'react';
import DynamicTag, { DynamicTagProps } from '../DynamicTag';
import { gridSystemStyle } from './GridContainer.css';

interface Props extends PropsWithChildren, DynamicTagProps {
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  autoRows?: string;
  autoColumns?: string;
  templateRows?: string;
  templateColumns?: string;
}

const GridSystem = ({
  children,
  style,
  autoFlow,
  autoRows,
  autoColumns,
  templateRows,
  templateColumns,
  ...rest
}: Props) => {
  return (
    <DynamicTag
      className={gridSystemStyle}
      style={{
        ...style,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridAutoColumns: autoColumns,
        gridTemplateRows: templateRows,
        gridTemplateColumns: templateColumns,
      }}
      {...rest}
    >
      {children}
    </DynamicTag>
  );
};

export default GridSystem;
