import { createStaticContext } from '@/utils/context/StaticContext';

const StaticContextProjectCard = createStaticContext<{
  sizeToken: CardSizeToken;
}>({
  sizeToken: 'LARGE',
});

export default StaticContextProjectCard;
