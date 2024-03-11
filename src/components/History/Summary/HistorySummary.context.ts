import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistorySummaryContextProps {
  summary_id: string;
  handleClick?: (id: string, summary_id: string) => void;
}

export const StaticContextHistorySummary =
  createStaticContext<HistorySummaryContextProps>({
    summary_id: '',
  });
