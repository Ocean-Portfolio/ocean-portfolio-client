'use client';

import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { buttonAnchorStyleVariant, buttonStyle, wrapStyle } from './Tab.css';

export interface TabProps {
  className?: string;
  wrapRef?: React.RefObject<HTMLDivElement>;
  selectedIdx: number;
  onClick: (currentIdx: number) => void;
  length: number;
  hidden?: boolean;
}

const Tab = ({
  className,
  wrapRef,
  hidden,
  length,
  selectedIdx,
  onClick,
}: TabProps) => {
  return (
    <div
      className={classNames(className, wrapStyle)}
      ref={wrapRef}
      style={{
        display: hidden ? 'none' : 'flex',
      }}
    >
      {Array.from({ length: length > 5 ? 5 : length }).map((_, idx) => (
        <Tab.Item
          key={idx}
          idx={idx}
          isSelected={idx === selectedIdx}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

interface ItemProps {
  idx: number;
  isSelected: boolean;
  onClick: (currentIdx: number) => void;
}

const Item = ({ idx, isSelected, onClick }: ItemProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const handleClick = () => {
    onClick(idx);
  };
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (spanRef.current) {
        spanRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);
  return (
    <span
      ref={spanRef}
      className={buttonAnchorStyleVariant[isSelected ? 'SELECTED' : 'DEFAULT']}
    >
      <Button as="button" className={buttonStyle} />
    </span>
  );
};

Tab.Item = Item;

export default Tab;
