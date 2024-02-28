import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryImpactContextProps {
  sizeToken?: 'LARGE' | 'SMALL';
  before: string;
  after: string;
  unitWord: string;
  content: string;
}

export const StaticContextHistoryImpactCard =
  createStaticContext<HistoryImpactContextProps>({
    sizeToken: 'LARGE',
    before: '',
    after: '',
    unitWord: '',
    content: '',
  });
