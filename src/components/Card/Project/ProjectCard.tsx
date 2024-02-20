import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Chip from '@/composable/Chip/Chip';
import Grid from '@/composable/Grid/Grid';
import ODSNextImage from '@/composable/Image/ODSNextImage';
import { ODSImageTokenVariables } from '@/const/images';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { getStaticContext } from '@/utils/context/StaticContext';
import StaticContextProjectCard, {
  ProjectCardContextProps,
} from './ProjectCard.context';
import {
  descriptionStyle,
  descriptionVariants,
  gapStyle,
  gapVariants,
  imageStyle,
  nameStyle,
  nameVariants,
  periodStyle,
  periodVariants,
  sizeStyle,
  sizeVariants,
  wrapStyle,
  wrapVariants,
} from './ProjectCard.css';

export interface ProjectCardProps extends ProjectCardContextProps {
  className?: string;
  visible_status: VisibleStatusToken;
}

const ProjectCard = ({
  children,
  className,
  visible_status,
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
          wrapStyle,
          sizeToken && wrapVariants[sizeToken],
          backgroundColorVariants['tertiary-variant'],
          sizeStyle,
          sizeToken && sizeVariants[sizeToken],
          gapStyle,
          sizeToken && gapVariants[sizeToken],
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
        nameStyle,
        sizeToken && nameVariants[sizeToken],
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
        descriptionStyle,
        sizeToken && descriptionVariants[sizeToken],
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
      className={classNames(
        periodStyle,
        sizeToken && periodVariants[sizeToken],
      )}
      bgColorToken="tertiary"
    >
      {period}
    </Chip>
  );
};

interface ImageProps {
  breakPointsToken?: BreakPointsToken;
}

const Image = ({ breakPointsToken }: ImageProps) => {
  const { sizeToken, src, alt } = getStaticContext(StaticContextProjectCard);

  const getImageSizeWithSizeToken = (sizeToken: SizeToken): ImageSizeToken => {
    switch (sizeToken) {
      case 'LARGE':
        return 'image-100';
      default:
        return 'image-75';
    }
  };

  const getImageSizeWithBreakPointsToken = (
    breakPointsToken: BreakPointsToken,
  ): ImageSizeToken => {
    switch (breakPointsToken) {
      case 'breakpoint-l':
        return 'image-75';
      case 'breakpoint-m':
        return 'image-75';
      case 'breakpoint-s':
        return 'image-75';
      default:
        return 'image-100';
    }
  };

  const sizeTokenValue = ((sizeToken && getImageSizeWithSizeToken(sizeToken)) ||
    (breakPointsToken &&
      getImageSizeWithBreakPointsToken(breakPointsToken))) as ImageSizeToken;

  return (
    <ODSNextImage
      className={imageStyle}
      style={{
        width: ODSImageTokenVariables[sizeTokenValue].width,
        height: ODSImageTokenVariables[sizeTokenValue].height,
      }}
      src={src}
      alt={alt}
      sizeToken={sizeTokenValue}
    />
  );
};

ProjectCard.Name = Name;
ProjectCard.Description = Description;
ProjectCard.Period = Period;
ProjectCard.Image = Image;

export default ProjectCard;
