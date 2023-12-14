import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { backgroundColorVariants } from '@/styles/common/color.css';
import Text from '../Text/Text';
import { chipStyle } from './Chip.css';

interface Props {
  className?: string;
  bgColorToken: UserColorThemeToken;
  style?: React.CSSProperties;
}

const Chip = ({
  className,
  children,
  bgColorToken,
  style,
}: PropsWithChildren<Props>) => {
  return (
    <Text
      as="span"
      className={classNames(
        chipStyle,
        backgroundColorVariants[bgColorToken],
        className,
      )}
      style={style}
      typoToken="caption-m-semibold"
    >
      {children}
    </Text>
  );
};

export default Chip;
