import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { fontVariants } from '@/styles/common/font.css';
import Button from '../Button/Button';
import { getSpecificButtonStatus } from '../Button/helper/getSepcificButtonStatus';
import { buttonVariants } from './LinkedButton.css';

interface Props {
  className?: string;
  size: 'M' | 'L';
  href?: string;
  status?: 'DEFAULT' | 'HOVER' | 'PRESS';
  width?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const LinkedButton = ({
  className,
  children,
  href,
  size,
  status = 'DEFAULT',
  width,
  style,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <Button
      as="a"
      type="button"
      href={href || ''}
      className={classNames(
        className,
        buttonVariants[size],
        fontVariants[
          size === 'M' ? 'paragraph-m-medium' : 'paragraph-s-regular'
        ],
        getSpecificButtonStatus?.(size, status),
      )}
      onClick={onClick}
      style={{ ...style, width }}
    >
      {children}
    </Button>
  );
};

export default LinkedButton;
