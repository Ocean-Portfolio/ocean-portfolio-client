import { createStaticContext } from '@/utils/context/StaticContext';

const StaticContextProjectCard = createStaticContext<{
  sizeToken: SizeToken;
}>({
  sizeToken: 'LARGE',
});

export default StaticContextProjectCard;
