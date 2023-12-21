import {
  GetImageByIdQuery,
  GetKeywordsByCategoryIdQuery,
} from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

type KeywordData = GetKeywordsByCategoryIdQuery['getKeywordsByCategoryId'];

interface KeywordListContextData extends KeywordData {
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
