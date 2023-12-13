import classNames from 'classnames';
import React from 'react';
import { backgroundColorVariants } from '@/styles/common/color.css';
import Tag from '../Tag/Tag';
import { horizontalSpacerStyle, verticalSpacerStyle } from './Spacer.css';

interface Props {
  className?: string;
  spacing: SpacingToken;
  direction?: 'vertical' | 'horizontal';
  bgColorToken?: UserColorThemeToken;
  style?: React.CSSProperties;
}

const Spacer = ({
  className,
  direction,
  spacing,
  bgColorToken,
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
        backgroundColorVariants[bgColorToken || 'transparent'],
      )}
      style={style}
    />
  );
};

export default Spacer;
