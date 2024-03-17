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

export interface ValueContextHistoryProps {
  page: number;
  isSelected: boolean;
  state: {
    id: string;
    summary_id: string;
    index: number;
  }[];
}

export const ValueContextHistory = createContext<ValueContextHistoryProps>({
  page: 0,
  isSelected: false,
  state: [],
});

interface DispatcherContextProps {
  dispatcher: React.Dispatch<React.SetStateAction<ValueContextHistoryProps>>;
}

export const DispatcherContextHistory = createContext<DispatcherContextProps>({
  dispatcher: () => {},
});
