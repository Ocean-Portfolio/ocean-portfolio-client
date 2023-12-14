import classNames from 'classnames';
import React from 'react';
import Bullet from '@/composable/Bullet/Bullet';
import ODSNextImage from '@/composable/Image/ODSNextImage';
import { colorVariants } from '@/styles/common/color.css';
import { textPreStyle } from '@/styles/common/text.css';
import {
  bulletStyle,
  gridExpeptJustifyWithSize,
  gridVariants,
  imageLayouts,
  imageVariants,
  keywordFontVariants,
  textDirectionVariants,
  textExceptAlignWithSize,
  wrapVariants,
} from './Keyword.css';

interface KeywordProps {
  className?: string;
  direction: 'LEFT' | 'RIGHT';
  sizeToken: CardSizeToken;
  src: string;
  alt: string;
  main_text: string;
  description: string;
}

const Keyword = ({
  className,
  direction,
  sizeToken,
  src,
  alt,
  main_text,
  description,
}: KeywordProps) => {
  return (
    <div
      className={classNames(
        className,
        wrapVariants[sizeToken],
        gridVariants[direction],
        sizeToken === 'SMALL' && gridExpeptJustifyWithSize,
      )}
    >
      {direction === 'LEFT' && (
        <ODSNextImage
          className={imageVariants[direction]}
          src={src}
          alt={alt}
          sizeToken={imageLayouts[sizeToken]}
        />
      )}
      <Bullet className={bulletStyle} sizeToken={sizeToken}>
        {main_text}
      </Bullet>
      <p
        className={classNames(
          textPreStyle,
          colorVariants['gray-scale-00'],
          keywordFontVariants[sizeToken],
          textDirectionVariants[direction],
          sizeToken === 'SMALL' && textExceptAlignWithSize,
        )}
      >
        {description}
      </p>
      {direction === 'RIGHT' && (
        <ODSNextImage
          className={imageVariants[direction]}
          src={src}
          alt={alt}
          sizeToken={imageLayouts[sizeToken]}
        />
      )}
    </div>
  );
};

export default Keyword;
