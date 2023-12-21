import classNames from 'classnames';
import React from 'react';
import Bullet from '@/composable/Bullet/Bullet';
import ODSNextImage from '@/composable/Image/ODSNextImage';
import { colorVariants } from '@/styles/common/color.css';
import { textPreStyle } from '@/styles/common/text.css';
import {
  bulletStyle,
  gridExceptJustifyWithSize,
  gridVariants,
  imageLayouts,
  imageMediaStyle,
  imageVariants,
  keywordFontMediaStyle,
  keywordFontVariants,
  textDirectionVariants,
  textExceptAlignWithSize,
  wrapMediaStyle,
  wrapVariants,
} from './Keyword.css';

interface KeywordProps {
  className?: string;
  direction: 'LEFT' | 'RIGHT';
  sizeToken?: SizeToken;
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
        gridVariants[direction],
        sizeToken ? wrapVariants[sizeToken] : wrapMediaStyle,
        sizeToken === 'SMALL' && gridExceptJustifyWithSize,
      )}
    >
      {direction === 'LEFT' && (
        <div
          className={
            !sizeToken
              ? classNames(imageMediaStyle, imageVariants[direction])
              : undefined
          }
        >
          <ODSNextImage
            className={imageVariants[direction]}
            src={src}
            alt={alt}
            sizeToken={sizeToken && imageLayouts[sizeToken]}
          />
        </div>
      )}
      <Bullet className={classNames(bulletStyle)} sizeToken={sizeToken}>
        {main_text}
      </Bullet>
      <p
        className={classNames(
          textPreStyle,
          colorVariants['gray-scale-00'],
          textDirectionVariants[direction],
          sizeToken === 'SMALL' && textExceptAlignWithSize,
          sizeToken ? keywordFontVariants[sizeToken] : keywordFontMediaStyle,
        )}
      >
        {description}
      </p>
      {direction === 'RIGHT' && (
        <div
          className={
            !sizeToken
              ? classNames(imageMediaStyle, imageVariants[direction])
              : undefined
          }
        >
          <ODSNextImage
            src={src}
            alt={alt}
            sizeToken={sizeToken && imageLayouts[sizeToken]}
          />
        </div>
      )}
    </div>
  );
};

export default Keyword;
