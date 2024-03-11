'use client';

import React, { useContext, useState } from 'react';
import { getStaticContext } from '@/utils/context/StaticContext';
import {
  DispatcherContextHistory,
  HistorySectionContextProps,
  StaticContextHistory,
  ValueContextHistory,
} from './History.context';
import HistorySummary from './Summary/HistorySummary';

interface Props extends HistorySectionContextProps {}

const History = ({ summary }: Props) => {
  const [selectInfo, setSelectInfo] = useState({
    isSelected: false,
    id: '',
  });

  return (
    <StaticContextHistory.Provider
      value={{
        summary,
      }}
    >
      <DispatcherContextHistory.Provider
        value={{
          setSelectInfo,
        }}
      >
        <ValueContextHistory.Provider
          value={{
            selectInfo,
          }}
        >
          <section>
            <History.Summary />
          </section>
        </ValueContextHistory.Provider>
      </DispatcherContextHistory.Provider>
    </StaticContextHistory.Provider>
  );
};

const Summary = () => {
  const { summary } = getStaticContext(StaticContextHistory);
  const { setSelectInfo } = useContext(DispatcherContextHistory);

  const handleClick = (id: string) => {
    setSelectInfo({
      isSelected: true,
      id,
    });
  };

  return (
    <>
      {summary.map((historySummary) => {
        if (!historySummary.histories.length) return null;

        return (
          <HistorySummary
            key={historySummary.id}
            title={historySummary.name}
            data={historySummary.histories}
            handleClick={handleClick}
          />
        );
      })}
    </>
  );
};

History.Summary = Summary;

export default History;
