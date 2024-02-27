import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryCardContextProps {
  sizeToken: 'LARGE' | 'SMALL';
  companyName: string;
  period: string;
}

const StaticContextHistoryCard = createStaticContext<HistoryCardContextProps>({
  sizeToken: 'LARGE',
  companyName: '',
  period: '',
});

export default StaticContextHistoryCard;
