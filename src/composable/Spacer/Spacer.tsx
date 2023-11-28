import classNames from 'classnames';
import React from 'react';
import { backgroundColorVariants } from '@/styles/color.css';
import Tag from '../Tag/Tag';
import { horizontalSpacerStyle, verticalSpacerStyle } from './Spacer.css';

interface Props {
  spacing: SpacingToken;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  backgroundColor?: ODSColorToken;
  style?: React.CSSProperties;
}

const Spacer = ({
  className,
  direction,
  spacing,
  backgroundColor,
  style,
}: Props) => {
  const spacerDirectionStyle =
    direction === 'vertical'
      ? verticalSpacerStyle[spacing]
      : horizontalSpacerStyle[spacing];

  return (
    <Tag
      as={direction === 'vertical' ? 'span' : 'div'}
      className={classNames(
        spacerDirectionStyle,
        className,
        backgroundColorVariants[backgroundColor || 'transparent'],
      )}
      style={style}
    />
  );
};

export default Spacer;
