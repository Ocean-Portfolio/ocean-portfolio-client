import { getClient } from '@/apollo/apollo-client';
import KeywordList from '@/components/KeywordList/KeywordList';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import { getImageByIdQueryList } from '@/helper/getImageByIdQuery';
import { getKeywordsByCategoryIdQueryList } from '@/helper/getKeywordByCategoryIdQueryList';

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
  const keywordList = await getKeywordsByCategoryIdQueryList(
    apolloClient,
    categoryBySectionId.data.getCategoryBySectionId.map((data) =>
      Number(data.id),
    ),
  );
  const imageList = await getImageByIdQueryList(
    apolloClient,
    keywordList.map((data) => data.data.getKeywordsByCategoryId.image_id || 0),
  );

  return (
    <KeywordList>
      <KeywordList.Title>{title}</KeywordList.Title>
      <KeywordList.Article>
        {keywordList.map(({ data }, idx) => (
          <KeywordList.Item
            key={data.getKeywordsByCategoryId.id}
            direction={idx % 2 ? 'RIGHT' : 'LEFT'}
            src={imageList[idx]?.data.getImageById.storage_url || ''}
            alt={imageList[idx]?.data.getImageById.description || ''}
            main_text={data.getKeywordsByCategoryId.main_text || ''}
            description={data.getKeywordsByCategoryId.description || ''}
          />
        ))}
      </KeywordList.Article>
    </KeywordList>
  );
};
export default KeywordContainer;
