import { createStaticContext } from '@/utils/context/StaticContext';

const StaticContextHistoryCard = createStaticContext<{
  sizeToken: 'LARGE' | 'SMALL';
}>({
  sizeToken: 'LARGE',
});

export default StaticContextHistoryCard;
