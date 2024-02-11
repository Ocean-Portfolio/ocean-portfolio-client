'use client';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import Tag, { TagProps } from '../Tag/Tag';

interface ClipboardProps {
  className?: string;
  targetText: string;
  as: TagProps['as'];
}

const Clipboard = ({
  children,
  className,
  as,
  targetText,
}: PropsWithChildren<ClipboardProps>) => {
  const handleClick: MouseEventHandler = () => {
    navigator.clipboard.writeText(targetText);
    alert(`클립보드에 복사되었습니다.\n${targetText}`);
  };
  return (
    <Tag as={as} className={className} onClick={handleClick}>
      {children}
    </Tag>
  );
};

export default Clipboard;
