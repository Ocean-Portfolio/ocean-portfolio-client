import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryDetailContextProps {
  sizeToken?: 'LARGE' | 'SMALL';
  title: string;
  period: string;
  position: string;
  content: string;
}

const StaticContextHistoryDetailCard =
  createStaticContext<HistoryDetailContextProps>({
    sizeToken: 'LARGE',
    title: '',
    period: '',
    position: '',
    content: '',
  });

export default StaticContextHistoryDetailCard;
