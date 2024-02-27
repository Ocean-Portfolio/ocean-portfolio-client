import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryCardContextProps {
  sizeToken: 'LARGE' | 'SMALL';
  companyName: string;
  positionName: string;
  period: string;
}

const StaticContextHistoryCard = createStaticContext<HistoryCardContextProps>({
  sizeToken: 'LARGE',
  companyName: '',
  positionName: '',
  period: '',
});

export default StaticContextHistoryCard;
