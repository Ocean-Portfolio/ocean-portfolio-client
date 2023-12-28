import { GetImageByIdQuery, GetKeywordsByCategoryIdQuery } from '../graphql';

type KeywordData = GetKeywordsByCategoryIdQuery['getKeywordsByCategoryId'];

declare global {
  interface KeywordListContextData extends KeywordData {
    visible_status: VisibleStatusToken;
    image?: GetImageByIdQuery['getImageById'];
  }
}
