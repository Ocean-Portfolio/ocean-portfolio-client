import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import { StaticContextPageInfo } from '@/app/sungyeon/context';
import { getIntroducesBySectionIdQuery } from '@/helper/getIntroducesBySectionIdQuery';
import { getStaticContext } from '@/utils/context/StaticContext';
import IntroduceContainer from './Introduce';
import KeywordContainer from './Keyword';

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
              <IntroduceContainer
                key={data.id}
                title={data.name}
                slogan={getIntroducesBySectionId.slogan || ''}
                intro_text={getIntroducesBySectionId.intro_text || ''}
                image_id={getIntroducesBySectionId.image_id || 0}
              />
            );
          case 'KEYWORD':
            return (
              <KeywordContainer
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

export default Contents;
