import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Chip from '@/composable/Chip/Chip';
import Grid from '@/composable/Grid/Grid';
import ODSNextImage from '@/composable/Image/ODSNextImage';
import { backgroundColorVariants, colorVariants } from '@/styles/color.css';
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
  sizeToken: CardSizeToken;
  colorThemeToken: ColorThemeToken;
  projectMode: ProjectModeToken;
  projectStatus: EndTimeToken;
}

const ProjectCard = ({
  className,
  children,
  visible_status,
  sizeToken,
  colorThemeToken,
  projectMode,
  projectStatus,
}: PropsWithChildren<ProjectCardProps>) => {
  if (visible_status === 'NONE') return null;

  const getBgColor = (colorThemeToken: ColorThemeToken): ODSColorToken => {
    switch (colorThemeToken) {
      case 'sungyeon':
        return 'sungyeon-tertiary-200';
      default:
        return 'sungyeon-tertiary-200';
    }
  };

  return (
    <StaticContextProjectCard.Provider
      value={{
        sizeToken,
        colorThemeToken,
      }}
    >
      <Grid
        className={classNames(
          className,
          wrapVariants[sizeToken],
          backgroundColorVariants[getBgColor(colorThemeToken)],
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
  const { sizeToken, colorThemeToken } = getStaticContext(
    StaticContextProjectCard,
  );

  const getColor = (colorThemeToken: ColorThemeToken): ODSColorToken => {
    switch (colorThemeToken) {
      case 'sungyeon':
        return 'gray-scale-00';
      default:
        return 'gray-scale-00';
    }
  };

  return (
    <p
      className={classNames(
        nameVariants[sizeToken],
        colorVariants[getColor(colorThemeToken)],
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
  const { sizeToken, colorThemeToken } = getStaticContext(
    StaticContextProjectCard,
  );

  const getColor = (colorThemeToken: ColorThemeToken): ODSColorToken => {
    switch (colorThemeToken) {
      case 'sungyeon':
        return 'gray-scale-01';
      default:
        return 'gray-scale-01';
    }
  };

  return (
    <p
      className={classNames(
        descriptionVariants[sizeToken],
        colorVariants[getColor(colorThemeToken)],
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
  const { colorThemeToken, sizeToken } = getStaticContext(
    StaticContextProjectCard,
  );
  const getChipColor = (colorThemeToken: ColorThemeToken): ODSColorToken => {
    switch (colorThemeToken) {
      case 'sungyeon':
        return 'sungyeon-tertiary-100';
      default:
        return 'sungyeon-tertiary-100';
    }
  };
  return (
    <Chip
      className={classNames(periodVariants[sizeToken])}
      backgroundColorToken={getChipColor(colorThemeToken)}
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

  const getImageSize = (sizeToken: CardSizeToken): ImageSizeToken => {
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
