import { createStaticContext } from '@/utils/context/StaticContext';
import { HistoryCardData } from './HistorySummary';

export interface HistorySummaryContextProps {
  summary_id: string;
  title: string;
  data: HistoryCardData[];
  isDetailView?: boolean;
  selectIndex?: number;
  handleClick?: (id: string, summary_id: string, index: number) => void;
}

export const StaticContextHistorySummary =
  createStaticContext<HistorySummaryContextProps>({
    summary_id: '',
    title: '',
    data: [],
  });
