import React, { PropsWithChildren } from 'react';
import SectionTitle from '@/composable/SectionTitle/SectionTitle';
import { getStaticContext } from '@/utils/context/StaticContext';
import { getPeriod } from '@/utils/date/getPeriod';
import MainProject from '../MainProject/MainProject';
import NormalProject from '../NormalProject/NormalProject';
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

  const period = getPeriod(
    Number(mainProject?.start_date || 0),
    Number(mainProject?.end_date || 0),
    mainProject?.end_time === 'CURRENT',
  );

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

  return <NormalProject projectData={data} />;
};

Project.Title = Title;
Project.Main = Main;
Project.Normal = Normal;

export default Project;
