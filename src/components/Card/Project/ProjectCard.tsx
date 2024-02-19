import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Chip from '@/composable/Chip/Chip';
import Grid from '@/composable/Grid/Grid';
import ODSNextImage from '@/composable/Image/ODSNextImage';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { getStaticContext } from '@/utils/context/StaticContext';
import StaticContextProjectCard, {
  ProjectCardContextProps,
} from './ProjectCard.context';
import {
  descriptionVariants,
  gapVariants,
  imageStyle,
  nameVariants,
  periodVariants,
  sizeVariants,
  wrapVariants,
} from './ProjectCard.css';

export interface ProjectCardProps extends ProjectCardContextProps {
  className?: string;
  visible_status: VisibleStatusToken;
  projectMode: ProjectModeToken;
  projectStatus: EndTimeToken;
}

const ProjectCard = ({
  className,
  children,
  visible_status,
  // projectMode,
  // projectStatus,
  sizeToken,
  name,
  content,
  period,
  src,
  alt,
}: PropsWithChildren<ProjectCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextProjectCard.Provider
      value={{
        sizeToken,
        name,
        content,
        period,
        src,
        alt,
      }}
    >
      <Grid
        className={classNames(
          className,
          wrapVariants[sizeToken],
          backgroundColorVariants['tertiary-variant'],
          sizeVariants[sizeToken],
          gapVariants[sizeToken],
        )}
        templateRows="repeat(3, fit-content) 1fr"
      >
        {children}
      </Grid>
    </StaticContextProjectCard.Provider>
  );
};

const Name = () => {
  const { sizeToken, name } = getStaticContext(StaticContextProjectCard);

  return (
    <p
      className={classNames(
        nameVariants[sizeToken],
        colorVariants['gray-scale-00'],
      )}
    >
      {name}
    </p>
  );
};

const Description = () => {
  const { sizeToken, content } = getStaticContext(StaticContextProjectCard);

  return (
    <p
      className={classNames(
        descriptionVariants[sizeToken],
        colorVariants['gray-scale-01'],
      )}
    >
      {content}
    </p>
  );
};

const Period = () => {
  const { sizeToken, period } = getStaticContext(StaticContextProjectCard);
  return (
    <Chip
      className={classNames(periodVariants[sizeToken])}
      bgColorToken="tertiary"
    >
      {period}
    </Chip>
  );
};

const Image = () => {
  const { sizeToken, src, alt } = getStaticContext(StaticContextProjectCard);

  const getImageSize = (sizeToken: SizeToken): ImageSizeToken => {
    switch (sizeToken) {
      case 'LARGE':
        return 'image-100';
      default:
        return 'image-75';
    }
  };
  return (
    <ODSNextImage
      className={imageStyle}
      src={src}
      alt={alt}
      sizeToken={getImageSize(sizeToken)}
    />
  );
};

ProjectCard.Name = Name;
ProjectCard.Description = Description;
ProjectCard.Period = Period;
ProjectCard.Image = Image;

export default ProjectCard;
