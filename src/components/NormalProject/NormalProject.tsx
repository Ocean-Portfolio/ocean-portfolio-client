'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Slider from 'react-slick';
import CommonIcon from '@/composable/Icon/CommonIcon';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import { useWindowResize } from '@/hook/useWindowResize';
import { getPeriod } from '@/utils/date/getPeriod';
import ProjectCard from '../Card/Project/ProjectCard';
import { ProjectContextData } from '../Project/Project.context';
import { getButtonPositionWithBreakPoints } from './getButtonPositionWithBreakPoints';
import {
  ContextDispatchNormalProject,
  ContextValueNormalProject,
} from './NormalProject.context';
import {
  buttonVariants,
  defaultContentsStyle,
  iconVariants,
  sliderStyle,
  wrapStyle,
} from './NormalProject.css';

interface Props {
  projectData: ProjectContextData[];
}

const NormalProject = ({ projectData }: Props) => {
  const [isMouseInSection, setMouseInSection] = useState(false);

  return (
    <ContextDispatchNormalProject.Provider
      value={{
        setMouseInSection,
      }}
    >
      <ContextValueNormalProject.Provider
        value={{ isMouseInSection, projectData }}
      >
        <NormalProject.Wrap>
          {projectData.length > 4 ? (
            <NormalProject.Slide />
          ) : (
            <NormalProject.Content />
          )}
        </NormalProject.Wrap>
      </ContextValueNormalProject.Provider>
    </ContextDispatchNormalProject.Provider>
  );
};

const Wrap = ({ children }: PropsWithChildren) => {
  const { setMouseInSection } = useContext(ContextDispatchNormalProject);

  const handleMouseEnter = () => {
    setMouseInSection(true);
  };

  return (
    <div className={wrapStyle} onMouseEnter={handleMouseEnter}>
      {children}
    </div>
  );
};

const Content = () => {
  const { projectData } = useContext(ContextValueNormalProject);
  return (
    <div className={defaultContentsStyle}>
      <>
        {projectData.map((project, idx) => {
          if (project.mode === 'MAIN') return null;

          const period = getPeriod(
            Number(project?.start_date || 0),
            Number(project?.end_date || 0),
            project?.end_time === 'CURRENT',
          );

          return (
            <ProjectCard
              key={project.id}
              visible_status="VISIBLE"
              projectMode={project.mode}
              projectStatus={project.end_time}
              sizeToken="LARGE"
              name={project.name}
              content={project.content || ''}
              period={period}
              src={project.image?.storage_url || ''}
              alt={project.image?.description || ''}
            >
              <ProjectCard.Name />
              <ProjectCard.Description />
              <ProjectCard.Period />
              <ProjectCard.Image />
            </ProjectCard>
          );
        })}
      </>
      );
    </div>
  );
};

const Slide = () => {
  const { projectData } = useContext(ContextValueNormalProject);

  return (
    <Slider
      className={sliderStyle}
      infinite={false}
      focusOnSelect={false}
      slidesToShow={3}
      slidesToScroll={3}
      nextArrow={<NormalProject.ButtonBox />}
      prevArrow={<NormalProject.ButtonBox />}
      speed={500}
    >
      {projectData.map((project, idx) => {
        if (project.mode === 'MAIN') return null;

        const period = getPeriod(
          Number(project?.start_date || 0),
          Number(project?.end_date || 0),
          project?.end_time === 'CURRENT',
        );

        return (
          <ProjectCard
            key={project.id}
            visible_status="VISIBLE"
            projectMode={project.mode}
            projectStatus={project.end_time}
            sizeToken="LARGE"
            name={project.name}
            content={project.content || ''}
            period={period}
            src={project.image?.storage_url || ''}
            alt={project.image?.description || ''}
          >
            <ProjectCard.Name />
            <ProjectCard.Description />
            <ProjectCard.Period />
            <ProjectCard.Image />
          </ProjectCard>
        );
      })}
    </Slider>
  );
};

interface ButtonBoxProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
}

const ButtonBox = (props: ButtonBoxProps) => {
  const { className, style, onClick } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const windowSize = useWindowResize();
  const breakPoints = useODSBreakPoints();

  const shiftValue = getButtonPositionWithBreakPoints(breakPoints);

  const direction =
    (className?.split(' ')[1] as 'slick-prev' | 'slick-next') || 'slick-prev';

  const enablePrevPosition = buttonRef.current && direction === 'slick-prev';
  const enableNextPosition = buttonRef.current && direction === 'slick-next';

  const $p = buttonRef.current?.parentElement;
  const $pp = $p?.parentElement;

  const buttonLeftPosition = enablePrevPosition
    ? -($pp as HTMLElement).getBoundingClientRect().left + shiftValue
    : '';

  const buttonRightPosition = enableNextPosition
    ? -windowSize.width +
      ($pp as HTMLElement).getBoundingClientRect().right +
      shiftValue
    : '';

  useLayoutEffect(() => {
    const button = buttonRef.current as HTMLButtonElement;
    const $p = button.parentElement as HTMLElement;
    const $pp = $p.parentElement as HTMLElement;

    const DOMRect = $pp.getBoundingClientRect();

    const { left, right } = DOMRect;

    if (direction === 'slick-prev') {
      const windowStartPoint = -left;
      button.style.left = `${windowStartPoint + shiftValue}px`;
    } else if (direction === 'slick-next') {
      const windowEndPoint = -windowSize.width + right;
      button.style.right = `${windowEndPoint + shiftValue}px`;
    }
  }, [buttonRef]);

  return (
    <button
      className={classNames(className, buttonVariants[direction])}
      ref={buttonRef}
      style={{
        ...style,
        display: 'flex',
        left: buttonLeftPosition,
        right: buttonRightPosition,
      }}
      onClick={onClick}
    >
      <CommonIcon
        className={iconVariants[direction]}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        format="png"
        width={40}
        height={40}
      />
    </button>
  );
};

NormalProject.Wrap = Wrap;
NormalProject.Content = Content;
NormalProject.Slide = Slide;
NormalProject.ButtonBox = ButtonBox;

export default NormalProject;
