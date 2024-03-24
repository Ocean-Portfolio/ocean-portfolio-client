import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import {
  captionStyle,
  captionVariants,
  imageVariants,
  pictureStyle,
  pictureVariants,
  wrapStyle,
  wrapVariants,
} from './SkillCard.css';

interface Props {
  className?: string;
  sizeToken?: SizeToken;
  src: string;
  alt: string;
  name: string;
}

const SkillCard = ({ className, sizeToken, src, alt, name }: Props) => {
  return (
    <div
      className={classNames(
        className,
        sizeToken ? wrapVariants[sizeToken] : wrapStyle,
      )}
    >
      <picture
        className={classNames(
          sizeToken ? pictureVariants[sizeToken] : pictureStyle,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={calcRemToPxNumber(imageVariants[sizeToken || 'LARGE'].width)}
          height={calcRemToPxNumber(imageVariants[sizeToken || 'LARGE'].height)}
        />
      </picture>
      <caption
        className={classNames(
          sizeToken ? captionVariants[sizeToken] : captionStyle,
        )}
      >
        {name}
      </caption>
    </div>
  );
};

export default SkillCard;
