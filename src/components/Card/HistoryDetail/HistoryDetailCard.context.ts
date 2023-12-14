import { createStaticContext } from '@/utils/context/StaticContext';

const StaticContextHistoryDetailCard = createStaticContext<{
  sizeToken: HistoryItemCardSizeToken;
}>({
  sizeToken: 'LARGE',
});

export default StaticContextHistoryDetailCard;
