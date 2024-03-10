'use client';

import React, { PropsWithChildren } from 'react';
import { getStaticContext } from '@/utils/context/StaticContext';
import {
  HistorySectionContextProps,
  StaticContextHistory,
} from './History.context';
import HistorySummary from './Summary/HistorySummary';

interface Props extends HistorySectionContextProps {}

const History = ({ summary }: Props) => {
  return (
    <StaticContextHistory.Provider
      value={{
        summary,
      }}
    >
      <section>
        <History.Summary />
      </section>
    </StaticContextHistory.Provider>
  );
};

const Summary = () => {
  const { summary } = getStaticContext(StaticContextHistory);
  return (
    <>
      {summary.map((historySummary) => {
        if (!historySummary.histories.length) return null;

        return (
          <HistorySummary
            key={historySummary.id}
            title={historySummary.name}
            data={historySummary.histories}
          />
        );
      })}
    </>
  );
};

History.Summary = Summary;

export default History;
