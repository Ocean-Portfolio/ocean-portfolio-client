import { createStaticContext } from '@/utils/context/StaticContext';

export interface HistoryDetailContextProps {
  sizeToken?: 'LARGE' | 'SMALL';
  title: string;
  period: string;
  position: string | null | undefined;
  content: string | null | undefined;
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
