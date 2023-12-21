import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import { StaticContextPageInfo } from '@/app/sungyeon/context';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import { getImageByIdQuery } from '@/helper/getImageByIdQuery';
import { getIntroducesBySectionIdQuery } from '@/helper/getIntroducesBySectionIdQuery';
import { getKeywordsByCategoryIdQueryList } from '@/helper/getKeywordByCategoryIdQueryList';
import { getStaticContext } from '@/utils/context/StaticContext';
import Introduce from './Introduce/Introduce';
import Keyword from './Keyword/Keyword';

const Contents = async () => {
  const apolloClient = getClient();
  const { sections } = getStaticContext(StaticContextPageInfo);

  // const sortedSections = [...sections].sort((a, b) => {
  //   return a.sort_order - b.sort_order;
  // });

  const { data } = await getIntroducesBySectionIdQuery(
    apolloClient,
    Number(sections[0].id),
  );

  const { getIntroducesBySectionId } = data;

  return (
    <>
      {sections.map((data) => {
        switch (data.section_type) {
          case 'INTRODUCE':
            return (
              <Contents.IntroduceSection
                key={data.id}
                title={data.name}
                slogan={getIntroducesBySectionId.slogan || ''}
                intro_text={getIntroducesBySectionId.intro_text || ''}
                image_id={getIntroducesBySectionId.image_id || 0}
              />
            );
          case 'KEYWORD':
            return <Contents.KeywordSection section_id={Number(data.id)} />;
          default:
            return <div key={data.id}>{data.name}</div>;
        }
      })}
    </>
  );
};

interface IntroduceSectionProps {
  title: string;
  slogan: string;
  intro_text: string;
  image_id: number;
}

const IntroduceSection = async ({
  title,
  slogan,
  intro_text,
  image_id,
}: IntroduceSectionProps) => {
  const apolloClient = getClient();
  const imgData = await getImageByIdQuery(apolloClient, image_id);

  return (
    <Introduce>
      <Introduce.Title text={title} />
      <Introduce.BodyWrap>
        <Introduce.Face
          src={imgData?.data.getImageById.storage_url || ''}
          alt={imgData?.data.getImageById.description || ''}
        />
        <Introduce.AboutMe slogan={slogan} intro_text={intro_text} />
      </Introduce.BodyWrap>
    </Introduce>
  );
};

interface KeywordSectionProps {
  section_id: number;
}

const KeywordSection = async ({ section_id }: KeywordSectionProps) => {
  const apolloClient = getClient();
  const categoryBySectionId = await getCategoryBySectionIdQuery(
    apolloClient,
    section_id,
  );
  const { getCategoryBySectionId } = categoryBySectionId.data;
  const keywordList = await getKeywordsByCategoryIdQueryList(
    apolloClient,
    getCategoryBySectionId.map((data) => Number(data.id)),
  );

  console.log(
    keywordList[0].data,
    keywordList[1].data,
    keywordList[2].data,
    'keywordList',
  );

  return (
    <>
      {keywordList.map((keyword, idx) => {
        return (
          <Keyword
            key={keyword.data.getKeywordsByCategoryId.id}
            direction={idx % 2 ? 'RIGHT' : 'LEFT'}
            sizeToken="LARGE"
            src={''}
            alt={''}
            main_text={keyword.data.getKeywordsByCategoryId.main_text || ''}
            description={keyword.data.getKeywordsByCategoryId.description || ''}
          />
        );
      })}
    </>
  );
};

Contents.IntroduceSection = IntroduceSection;
Contents.KeywordSection = KeywordSection;

export default Contents;
