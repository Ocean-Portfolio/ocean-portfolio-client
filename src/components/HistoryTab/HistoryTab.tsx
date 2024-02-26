import React from 'react';
import { useOceanSwiperIndex } from '@/hook/useOceanSwiperIndex';

const HistoryTab = () => {
  const { readIndex } = useOceanSwiperIndex();

  return <div>{readIndex}</div>;
};

export default HistoryTab;
