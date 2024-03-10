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
