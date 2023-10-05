import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Tag, { TagProps } from '../Tag/Tag';
import { gridSystemStyle } from './Grid.css';

interface Props extends PropsWithChildren, TagProps {
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  autoRows?: string;
  autoColumns?: string;
  templateRows?: string;
  templateColumns?: string;
}

const Grid = ({
  children,
  className,
  style,
  autoFlow,
  autoRows,
  autoColumns,
  templateRows,
  templateColumns,
  ...rest
}: Props) => {
  return (
    <Tag
      className={classNames(gridSystemStyle, className)}
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
    </Tag>
  );
};

export default Grid;
