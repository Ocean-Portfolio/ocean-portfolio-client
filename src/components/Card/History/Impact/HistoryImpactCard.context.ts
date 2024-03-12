import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryImpactContextProps {
  sizeToken?: 'LARGE' | 'SMALL';
  before: string;
  after: string;
  content: string | null | undefined;
}

export const StaticContextHistoryImpactCard =
  createStaticContext<HistoryImpactContextProps>({
    sizeToken: 'LARGE',
    before: '',
    after: '',
    content: '',
  });
