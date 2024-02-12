import React, { PropsWithChildren } from 'react';
import SectionTitle from '@/composable/SectionTitle/SectionTitle';
import { getStaticContext } from '@/utils/context/StaticContext';
import MainProject from '../MainProject/MainProject';
import { ProjectContextProps, StaticContextProject } from './Project.context';
import { wrapStyle } from './Project.css';

const Project = ({
  children,
  title,
  data,
}: PropsWithChildren<ProjectContextProps>) => {
  return (
    <StaticContextProject.Provider
      value={{
        title,
        data,
      }}
    >
      <section className={wrapStyle}>{children}</section>
    </StaticContextProject.Provider>
  );
};

const Title = () => {
  const { title } = getStaticContext(StaticContextProject);

  return <SectionTitle>{title}</SectionTitle>;
};

const Main = () => {
  const { data } = getStaticContext(StaticContextProject);
  const mainProject = data.find((project) => project.mode === 'MAIN');

  const startDate = new Date(Number(mainProject?.start_date))
    .toISOString()
    .split('-');
  const endDate = new Date(Number(mainProject?.end_date))
    .toISOString()
    .split('-');

  const period = `${startDate[0]}.${startDate[1]} ~ ${
    mainProject?.end_time === 'CURRENT' ? 'ing' : `${endDate[0]}.${endDate[1]}`
  }`;

  return (
    <MainProject
      src={mainProject?.image?.storage_url || ''}
      device={mainProject?.mockup || 'MOBILE'}
      title={mainProject?.name || ''}
      period={period}
      description={mainProject?.content || ''}
    />
  );
};

const Normal = () => {
  const { data } = getStaticContext(StaticContextProject);

  return <div>{}</div>;
};

Project.Title = Title;
Project.Main = Main;
Project.Normal = Normal;

export default Project;
