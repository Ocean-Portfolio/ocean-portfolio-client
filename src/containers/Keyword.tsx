import { getClient } from '@/apollo/apollo-client';
import KeywordList from '@/components/KeywordList/KeywordList';
import { KeywordListContextData } from '@/components/KeywordList/KeywordList.context';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import { getImageByIdQueryList } from '@/helper/getImageByIdQuery';
import { getKeywordsByCategoryIdQueryList } from '@/helper/getKeywordByCategoryIdQueryList';
import { GetImageByIdQuery } from '@/types/graphql';
import { filterUndefinedData } from '@/utils/array/filterUndefinedData';

interface KeywordSectionProps {
  title: string;
  section_id: number;
}

const KeywordContainer = async ({ title, section_id }: KeywordSectionProps) => {
  const apolloClient = getClient();
  const categoryBySectionId = await getCategoryBySectionIdQuery(
    apolloClient,
    section_id,
  );
  const keywordListData = await getKeywordsByCategoryIdQueryList(
    apolloClient,
    categoryBySectionId.data.getCategoryBySectionId.map((category) =>
      Number(category.id),
    ),
  );
  const imageListData = await getImageByIdQueryList(
    apolloClient,
    keywordListData.map(
      (keyword) => keyword.data.getKeywordsByCategoryId.image_id || 0,
    ),
  );

  const keywordList: KeywordListContextData[] = keywordListData.map(
    (keyword) => {
      return {
        ...keyword.data.getKeywordsByCategoryId,
        visible_status: keyword.data.getKeywordsByCategoryId
          .visible_status as VisibleStatusToken,
      };
    },
  );

  const imageList: GetImageByIdQuery['getImageById'][] = filterUndefinedData(
    imageListData,
  ).map((image) => image.data.getImageById);

  const data = keywordList.map((keyword, idx) => ({
    ...keyword,
    image: imageList[idx],
  }));

  return (
    <KeywordList title={title} data={data}>
      <KeywordList.Title />
      <KeywordList.Article />
    </KeywordList>
  );
};
export default KeywordContainer;
