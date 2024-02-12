import React from 'react';
import { StaticContextPageInfo } from '@/app/sungyeon/context';
import { getStaticContext } from '@/utils/context/StaticContext';
import ContactContainer from './Contact';
import IntroduceContainer from './Introduce';
import KeywordContainer from './Keyword';
import ProjectContainer from './Project';

const Contents = () => {
  const { sections } = getStaticContext(StaticContextPageInfo);

  return (
    <>
      {sections.map((data) => {
        switch (data.section_type) {
          case 'INTRODUCE':
            return (
              <IntroduceContainer
                key={data.id}
                title={data.name}
                section_id={Number(data.id)}
              />
            );
          case 'KEYWORD':
            return (
              <KeywordContainer
                key={data.id}
                title={data.name}
                section_id={Number(data.id)}
              />
            );
          case 'CONTACT':
            return (
              <ContactContainer
                key={data.id}
                title={data.name}
                section_id={Number(data.id)}
              />
            );
          case 'PROJECT':
            return (
              <ProjectContainer
                key={data.id}
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
