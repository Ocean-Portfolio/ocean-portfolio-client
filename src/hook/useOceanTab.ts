import { useState } from 'react';

const useOceanTab = (initIdx?: number) => {
  const [selectedIdx, setSelectedIdx] = useState(initIdx || 0);

  const handleClick = (idx: number) => {
    setSelectedIdx(idx);
  };

  return {
    selectedIdx,
    handleClick,
  };
};

export default useOceanTab;
