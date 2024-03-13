import { createContext } from 'react';
import { GetCategoryBySectionIdQuery } from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';
import { HistoryCardData } from './Summary/HistorySummary';

type HistoryCategoryData =
  GetCategoryBySectionIdQuery['getCategoryBySectionId'][0];

export interface SummaryData extends HistoryCategoryData {
  histories: HistoryCardData[];
}

export interface HistorySectionContextProps {
  summary: SummaryData[];
}

export const StaticContextHistory =
  createStaticContext<HistorySectionContextProps>({
    summary: [],
  });

interface DispatcherContextProps {
  setSelectInfo: React.Dispatch<
    React.SetStateAction<{
      isSelected: boolean;
      id: string;
      summary_id: string;
      index: number;
    }>
  >;
}

export const DispatcherContextHistory = createContext<DispatcherContextProps>({
  setSelectInfo: () => {},
});

interface ValueContextHistoryProps {
  selectInfo: {
    isSelected: boolean;
    id: string;
    summary_id: string;
    index: number;
  };
}

export const ValueContextHistory = createContext<ValueContextHistoryProps>({
  selectInfo: {
    isSelected: false,
    id: '',
    summary_id: '',
    index: -1,
  },
});
