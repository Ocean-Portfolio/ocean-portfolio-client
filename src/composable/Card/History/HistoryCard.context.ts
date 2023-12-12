import { createStaticContext } from '@/utils/context/StaticContext';

const StaticContextHistoryCard = createStaticContext<{
  sizeToken: 'LARGE' | 'SMALL';
  colorThemeToken: ColorThemeToken;
}>({
  sizeToken: 'LARGE',
  colorThemeToken: 'sungyeon',
});

export default StaticContextHistoryCard;
