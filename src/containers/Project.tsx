import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import Project from '@/components/Project/Project';
import { ProjectContextData } from '@/components/Project/Project.context';
import { getImageByIdQueryList } from '@/helper/getImageByIdQuery';
import { getProjectsBySectionIdQuery } from '@/helper/getProjectBySectionIdQuery';
import { GetImageByIdQuery } from '@/types/graphql';
import { filterUndefinedData } from '@/utils/array/filterUndefinedData';

interface ProjectSectionProps {
  title: string;
  section_id: number;
}

const ProjectContainer = async ({ title, section_id }: ProjectSectionProps) => {
  const apolloClient = getClient();
  const projectListData = await getProjectsBySectionIdQuery(
    apolloClient,
    section_id,
  );

  const imageListData = await getImageByIdQueryList(
    apolloClient,
    projectListData.data.getProjectsBySectionId.map(
      (project) => project.image_id || 0,
    ),
  );

  const projectList = projectListData.data.getProjectsBySectionId as Omit<
    ProjectContextData,
    'image'
  >[];

  const imageList: GetImageByIdQuery['getImageById'][] = filterUndefinedData(
    imageListData,
  ).map((image) => image.data.getImageById);

  const data = projectList.map((project, idx) => ({
    ...project,
    image: imageList[idx],
  }));

  return (
    <Project title={title} data={data}>
      <Project.Title />
      <Project.Main />
      <Project.Normal />
    </Project>
  );
};

export default ProjectContainer;
