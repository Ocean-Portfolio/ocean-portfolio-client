import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import { StaticContextPageInfo } from '@/app/context';
import Skill from '@/components/Skill/Skill';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import { getImageByIdQuery } from '@/helper/getImageByIdQuery';
import { getSkillsByCategoryIdQueryList } from '@/helper/getSkillsByCategoryIdQueryList';
import { getStaticContext } from '@/utils/context/StaticContext';

interface Props {
  title: string;
  section_id: number;
}

const SkillContainer = async ({ title, section_id }: Props) => {
  const { userAgent } = getStaticContext(StaticContextPageInfo);
  const apolloClient = getClient();

  const categoryBySectionId = await getCategoryBySectionIdQuery(
    apolloClient,
    section_id,
  );

  const skillListData = await getSkillsByCategoryIdQueryList(
    apolloClient,
    categoryBySectionId.data.getCategoryBySectionId.map((category) =>
      Number(category.id),
    ),
  );

  const data = await Promise.all(
    skillListData.map(async (skillList, idx) => {
      const imageData = await getImageByIdQuery(
        apolloClient,
        skillList.data.getSkillsByCategoryId[idx]?.image_id,
      );

      const skillData = skillList.data.getSkillsByCategoryId.map((skill) => {
        return {
          ...skill,
          image: imageData?.data.getImageById,
        };
      });
      return {
        ...categoryBySectionId.data.getCategoryBySectionId[idx],
        skills: skillData,
      };
    }),
  );

  return <Skill userAgent={userAgent} title={title} data={data} />;
};

export default SkillContainer;
