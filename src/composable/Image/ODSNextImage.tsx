import Image, { ImageProps } from 'next/image';
import React from 'react';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import { imageSizes } from './ODSImage.css';

export interface ODSNextImageProps extends ImageProps {
  sizeToken: ImageSizeToken;
}

const ODSNextImage = ({
  className,
  sizeToken,
  src,
  alt,
  ...rest
}: ODSNextImageProps) => {
  return (
    <Image
      {...rest}
      className={className}
      src={src}
      width={calcRemToPxNumber(imageSizes[sizeToken].width)}
      height={calcRemToPxNumber(imageSizes[sizeToken].height)}
      alt={alt}
    />
  );
};

export default ODSNextImage;
