import React from 'react';
import History from '@/components/History/History';

interface Props {
  title: string;
  section_id: number;
}

const HistoryContainer = ({ title, section_id }: Props) => {
  return <History />;
};

export default HistoryContainer;
