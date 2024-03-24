import React, { PropsWithChildren } from 'react';
import Button from '@/composable/Button/Button';
import { wrapStyleVariants } from './TextTab.css';

interface Props {
  isSelected?: boolean;
  onClick?: () => void;
}

const TextTab = ({
  children,
  isSelected,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <Button
      as="button"
      type="button"
      className={wrapStyleVariants[isSelected ? 'SELECTED' : 'DEFAULT']}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default TextTab;
