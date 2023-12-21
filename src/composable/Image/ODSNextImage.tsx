import Image, { ImageProps } from 'next/image';
import React from 'react';
import { ODSImageTokenVariables } from '@/const/images';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';

export interface ODSNextImageProps extends ImageProps {
  sizeToken?: ImageSizeToken;
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
      width={
        sizeToken && calcRemToPxNumber(ODSImageTokenVariables[sizeToken].width)
      }
      height={
        sizeToken && calcRemToPxNumber(ODSImageTokenVariables[sizeToken].height)
      }
      alt={alt}
      fill={!sizeToken}
      objectFit={sizeToken && 'cover'}
    />
  );
};

export default ODSNextImage;
