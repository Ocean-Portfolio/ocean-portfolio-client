import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
import Text from '../Text/Text';
import { chipStyle } from './Chip.css';

interface Props {
  className?: string;
  bgColorToken: UserColorThemeToken;
}

const Chip = ({
  className,
  children,
  bgColorToken,
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
    >
      {children}
    </Text>
  );
};

export default Chip;
