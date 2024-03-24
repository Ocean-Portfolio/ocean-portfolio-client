'use client';

import dynamic from 'next/dynamic';
import React, { PropsWithChildren, useState } from 'react';
import { useReactiveLayout } from '@/hook/useReactiveLayout';
import {
  DispatcherContextSkill,
  StaticContextSkill,
  StaticContextSkillProps,
  ValueContextSkill,
} from './Skill.context';
import { titleStyle } from './Skill.css';

interface Props extends StaticContextSkillProps {
  title: string;
  userAgent: UAParser.IResult;
}

const Skill = ({ title, data, userAgent }: Props) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useReactiveLayout(userAgent);

  return (
    <StaticContextSkill.Provider
      value={{
        data,
        userAgent,
      }}
    >
      <DispatcherContextSkill.Provider
        value={{
          setSelectedIdx,
          setIsTabOpen,
          setIsModalOpen,
        }}
      >
        <ValueContextSkill.Provider
          value={{
            selectedIdx,
            isTabOpen,
            isModalOpen,
          }}
        >
          <Skill.Wrap>
            <Skill.Title>{title}</Skill.Title>
            {!isMobile && <Skill.Slide />}
          </Skill.Wrap>
        </ValueContextSkill.Provider>
      </DispatcherContextSkill.Provider>
    </StaticContextSkill.Provider>
  );
};

const Wrap = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={titleStyle}>{children}</h1>;
};

Skill.Wrap = Wrap;
Skill.Title = Title;
Skill.Slide = dynamic(() => import('./SkillSlide'), {
  ssr: false,
  loading: () => <></>,
});

export default Skill;
