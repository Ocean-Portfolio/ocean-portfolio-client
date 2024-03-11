import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistorySummaryContextProps {
  handleClick?: (id: string) => void;
}

export const StaticContextHistorySummary =
  createStaticContext<HistorySummaryContextProps>({});
