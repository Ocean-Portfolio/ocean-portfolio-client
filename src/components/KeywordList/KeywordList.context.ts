import {
  GetImageByIdQuery,
  GetKeywordsByCategoryIdQuery,
} from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

type KeywordData = GetKeywordsByCategoryIdQuery['getKeywordsByCategoryId'];

export interface KeywordListContextData extends KeywordData {
  visible_status: VisibleStatusToken;
  image?: GetImageByIdQuery['getImageById'];
}

export interface KeywordListProps {
  title: string;
  data: KeywordListContextData[];
}

export const StaticContextKeywordList = createStaticContext<KeywordListProps>({
  title: '',
  data: [],
});
