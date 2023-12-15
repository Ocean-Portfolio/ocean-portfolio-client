import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import {
  captionVariants,
  imageVariants,
  pictureVariants,
  wrapVariants,
} from './SkillCard.css';

interface Props {
  className?: string;
  sizeToken: CardSizeToken;
  src: string;
  alt: string;
  name: string;
}

const SkillCard = ({ className, sizeToken, src, alt, name }: Props) => {
  return (
    <div className={classNames(className, wrapVariants[sizeToken])}>
      <picture className={pictureVariants[sizeToken]}>
        <Image
          src={src}
          alt={alt}
          width={calcRemToPxNumber(imageVariants[sizeToken].width)}
          height={calcRemToPxNumber(imageVariants[sizeToken].height)}
        />
      </picture>
      <caption className={captionVariants[sizeToken]}>{name}</caption>
    </div>
  );
};

export default SkillCard;
