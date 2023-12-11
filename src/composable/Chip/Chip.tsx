import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/font.css';
import Text from '../Text/Text';
import { chipVariants } from './Chip.css';

interface Props {
  className?: string;
  backgroundColorToken: ODSColorToken;
}

const Chip = ({
  className,
  children,
  backgroundColorToken,
}: PropsWithChildren<Props>) => {
  return (
    <Text
      as="span"
      className={classNames(
        chipVariants[backgroundColorToken],
        fontVariants['caption-m-semibold'],
        className,
      )}
    >
      {children}
    </Text>
  );
};

export default Chip;
