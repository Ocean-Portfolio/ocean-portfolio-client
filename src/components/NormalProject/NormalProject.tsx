'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Slider from 'react-slick';
import CommonIcon from '@/composable/Icon/CommonIcon';
import { useODSBreakPoints } from '@/hook/useODSBreakPoints';
import useResizeObserver from '@/hook/useResizeObserver';
import { useWindowResize } from '@/hook/useWindowResize';
import { getPeriod } from '@/utils/date/getPeriod';
import { getCurrentBreakPoints } from '@/utils/layout/getCurrentBreakPoints';
import ProjectCard from '../Card/Project/ProjectCard';
import { ProjectContextData } from '../Project/Project.context';
import { getButtonPositionWithBreakPoints } from './getButtonPositionWithBreakPoints';
import { getCardWidthWithBreakPoints } from './getCardWidthWithBreakPoints';
import { getSlidesToShowWithBreakPoints } from './getSlidesToShowWithBreakPoints';
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
  const observerRef = useRef<HTMLDivElement>(null);

  return (
    <ContextDispatchNormalProject.Provider
      value={{
        setMouseInSection,
      }}
    >
      <ContextValueNormalProject.Provider
        value={{ isMouseInSection, projectData, observerRef }}
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
  const { observerRef } = useContext(ContextValueNormalProject);
  const { setMouseInSection } = useContext(ContextDispatchNormalProject);

  const handleMouseEnter = () => {
    setMouseInSection(true);
  };

  const handleMouseLeave = () => {
    setMouseInSection(false);
  };

  const handleBlur = () => {
    setMouseInSection(false);
  };

  useEffect(() => {
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div
      className={wrapStyle}
      ref={observerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const Content = () => {
  const { projectData } = useContext(ContextValueNormalProject);
  const breakPoints = useODSBreakPoints();
  const currentBreakPoints = getCurrentBreakPoints(breakPoints);

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
              name={project.name}
              content={project.content || ''}
              period={period}
              src={project.image?.storage_url || ''}
              alt={project.image?.description || ''}
            >
              <ProjectCard.Name />
              <ProjectCard.Description />
              <ProjectCard.Period />
              <ProjectCard.Image breakPointsToken={currentBreakPoints} />
            </ProjectCard>
          );
        })}
      </>
      );
    </div>
  );
};

const Slide = () => {
  const { projectData, isMouseInSection } = useContext(
    ContextValueNormalProject,
  );

  const breakPoints = useODSBreakPoints();
  const currentBreakPoints = getCurrentBreakPoints(breakPoints);

  return (
    <Slider
      className={sliderStyle}
      variableWidth={true}
      infinite={false}
      focusOnSelect={false}
      slidesToShow={getSlidesToShowWithBreakPoints(currentBreakPoints)}
      slidesToScroll={getSlidesToShowWithBreakPoints(currentBreakPoints)}
      prevArrow={
        currentBreakPoints !== 'breakpoint-s' && isMouseInSection ? (
          <NormalProject.ButtonBox />
        ) : undefined
      }
      nextArrow={
        currentBreakPoints !== 'breakpoint-s' && isMouseInSection ? (
          <NormalProject.ButtonBox />
        ) : undefined
      }
      speed={350}
    >
      {projectData.map((project, idx) => {
        if (project.mode === 'MAIN') return null;

        const period = getPeriod(
          Number(project?.start_date || 0),
          Number(project?.end_date || 0),
          project?.end_time === 'CURRENT',
        );

        return (
          <div
            key={project.id}
            style={{
              width: getCardWidthWithBreakPoints(currentBreakPoints),
            }}
          >
            <ProjectCard
              visible_status="VISIBLE"
              name={project.name}
              content={project.content || ''}
              period={period}
              src={project.image?.storage_url || ''}
              alt={project.image?.description || ''}
            >
              <ProjectCard.Name />
              <ProjectCard.Description />
              <ProjectCard.Period />
              <ProjectCard.Image breakPointsToken={currentBreakPoints} />
            </ProjectCard>
          </div>
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

  const { observerRef } = useContext(ContextValueNormalProject);
  const windowSize = useWindowResize();
  const breakPoints = useODSBreakPoints();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const shiftValue = getButtonPositionWithBreakPoints(breakPoints);

  const direction =
    (className?.split(' ')[1] as 'slick-prev' | 'slick-next') || 'slick-prev';

  const enablePrevPosition = buttonRef.current && direction === 'slick-prev',
    enableNextPosition = buttonRef.current && direction === 'slick-next';

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

  const setButtonPosition = () => {
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
  };

  const { resizedValue } = useResizeObserver(observerRef.current, () => {});

  useLayoutEffect(setButtonPosition, [resizedValue]);

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
