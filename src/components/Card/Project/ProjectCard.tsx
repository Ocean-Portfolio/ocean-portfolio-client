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
import StaticContextProjectCard from './ProjectCard.context';
import {
  descriptionVariants,
  gapVariants,
  imageStyle,
  nameVariants,
  periodVariants,
  sizeVariants,
  wrapVariants,
} from './ProjectCard.css';

export interface ProjectCardProps {
  className?: string;
  visible_status: VisibleStatusToken;
  sizeToken: SizeToken;
  projectMode: ProjectModeToken;
  projectStatus: EndTimeToken;
}

const ProjectCard = ({
  className,
  children,
  visible_status,
  sizeToken,
  projectMode,
  projectStatus,
}: PropsWithChildren<ProjectCardProps>) => {
  if (visible_status === 'NONE') return null;

  return (
    <StaticContextProjectCard.Provider
      value={{
        sizeToken,
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

interface NameProps {
  name: string;
}

const Name = ({ name }: NameProps) => {
  const { sizeToken } = getStaticContext(StaticContextProjectCard);

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

interface DescriptionProps {
  content?: string;
}

const Description = ({ content }: DescriptionProps) => {
  const { sizeToken } = getStaticContext(StaticContextProjectCard);

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

interface PeriodProps {
  period: string;
}

const Period = ({ period }: PeriodProps) => {
  const { sizeToken } = getStaticContext(StaticContextProjectCard);
  return (
    <Chip
      className={classNames(periodVariants[sizeToken])}
      bgColorToken="tertiary"
    >
      {period}
    </Chip>
  );
};

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  const { sizeToken } = getStaticContext(StaticContextProjectCard);

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
