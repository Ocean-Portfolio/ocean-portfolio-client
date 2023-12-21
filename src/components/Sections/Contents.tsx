import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import { StaticContextPageInfo } from '@/app/sungyeon/context';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import {
  getImageByIdQuery,
  getImageByIdQueryList,
} from '@/helper/getImageByIdQuery';
import { getIntroducesBySectionIdQuery } from '@/helper/getIntroducesBySectionIdQuery';
import { getKeywordsByCategoryIdQueryList } from '@/helper/getKeywordByCategoryIdQueryList';
import { getStaticContext } from '@/utils/context/StaticContext';
import Introduce from './Introduce/Introduce';
import KeywordList from './KeywordList/KeywordList';

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
            return (
              <Contents.KeywordSection
                title={data.name}
                section_id={Number(data.id)}
              />
            );
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
  title: string;
  section_id: number;
}

const KeywordSection = async ({ title, section_id }: KeywordSectionProps) => {
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

  const imageList = await getImageByIdQueryList(
    apolloClient,
    keywordList.map((data) => data.data.getKeywordsByCategoryId.image_id || 0),
  );

  return (
    <KeywordList>
      <KeywordList.Title>{title}</KeywordList.Title>
      <KeywordList.Article keywordList={keywordList} imageList={imageList} />
    </KeywordList>
  );
};

Contents.IntroduceSection = IntroduceSection;
Contents.KeywordSection = KeywordSection;

export default Contents;
