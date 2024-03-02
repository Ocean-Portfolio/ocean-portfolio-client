import React from 'react';
import Button from '../Button/Button';
import { buttonAnchorStyleVariant, buttonStyle, wrapStyle } from './Tab.css';

export interface TabProps {
  selectedIdx: number;
  onClick: (currentIdx: number) => void;
  length: number;
}

const Tab = ({ length, selectedIdx, onClick }: TabProps) => {
  return (
    <div className={wrapStyle}>
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
  const handleClick = () => {
    onClick(idx);
  };
  return (
    <span
      className={buttonAnchorStyleVariant[isSelected ? 'SELECTED' : 'DEFAULT']}
    >
      <Button as="button" className={buttonStyle} onClick={handleClick} />
    </span>
  );
};

Tab.Item = Item;

export default Tab;
