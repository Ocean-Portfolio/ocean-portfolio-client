import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import { StaticContextPageInfo } from '@/app/sungyeon/context';
import { getImageByIdQuery } from '@/helper/getImageByIdQuery';
import { getIntroducesBySectionIdQuery } from '@/helper/getIntroducesBySectionIdQuery';
import { getStaticContext } from '@/utils/context/StaticContext';
import Introduce from './Introduce/Introduce';

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

Contents.IntroduceSection = IntroduceSection;

export default Contents;
