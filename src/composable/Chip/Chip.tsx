import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
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
        fontVariants['caption-m-semibold'],
        className,
      )}
      style={style}
    >
      {children}
    </Text>
  );
};

export default Chip;
