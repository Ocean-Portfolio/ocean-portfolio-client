import { createStaticContext } from '@/utils/context/StaticContext';

const StaticContextProjectCard = createStaticContext<{
  sizeToken: CardSizeToken;
  colorThemeToken: ColorThemeToken;
}>({
  sizeToken: 'LARGE',
  colorThemeToken: 'sungyeon',
});

export default StaticContextProjectCard;
