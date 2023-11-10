import Image, { ImageProps } from 'next/image';
import React, { useRef } from 'react';
import { ASSET_ENDPOINT } from '@/const/endpoint';
import iconResourceSrcFormat from '@/utils/string/iconResourceSrcFormat';

type ModifiedImageProps = Omit<ImageProps, 'src' | 'alt'>;
type Props = ODSIconTokenInterface &
  ModifiedImageProps & {
    format?: 'png' | 'svg';
  };

const Icon = ({
  company,
  color,
  background,
  state,
  format,
  ...props
}: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const resource = iconResourceSrcFormat({
    company,
    color,
    background,
    state,
  });

  const path = `${ASSET_ENDPOINT}/icons/${company.toLowerCase()}`;

  return (
    <Image
      {...props}
      ref={imageRef}
      src={`${path}/${resource}.${format || 'png'}`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.opacity = '0';
      }}
      alt={company}
    />
  );
};

export default Icon;
