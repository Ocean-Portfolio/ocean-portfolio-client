'use client';

import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import {
  buttonAnchorStyleVariant,
  buttonStyle,
  wrapStyleVariants,
} from './Tab.css';

export interface TabProps {
  className?: string;
  wrapRef?: React.RefObject<HTMLDivElement>;
  isSelected?: boolean;
  selectedIdx?: number;
  onClick: (currentIdx: number) => void;
  length: number;
  hidden?: boolean;
  bottom?: boolean;
}

const Tab = ({
  className,
  wrapRef,
  hidden,
  length,
  isSelected,
  selectedIdx,
  bottom,
  onClick,
}: TabProps) => {
  return (
    <div
      className={classNames(
        className,
        wrapStyleVariants[bottom ? 'BOTTOM' : 'DEFAULT'],
      )}
      ref={wrapRef}
      style={{
        display: hidden ? 'none' : 'flex',
      }}
    >
      {Array.from({ length: length > 5 ? 5 : length }).map((_, idx) => (
        <Tab.Item
          key={idx}
          idx={idx}
          isSelected={isSelected ? isSelected : idx === selectedIdx}
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
  const handleClick = () => onClick(idx);
  return (
    <span
      className={buttonAnchorStyleVariant[isSelected ? 'SELECTED' : 'DEFAULT']}
      onClick={handleClick}
      onClickCapture={handleClick}
    >
      <Button as="button" className={buttonStyle} />
    </span>
  );
};

Tab.Item = Item;

export default Tab;
