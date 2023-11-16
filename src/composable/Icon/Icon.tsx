import dynamic from 'next/dynamic';
import Image, { ImageProps } from 'next/image';
import React from 'react';
import { ASSET_ENDPOINT } from '@/const/endpoint';
import iconResourceSrcFormat from '@/utils/string/iconResourceSrcFormat';

const Icon = () => {};

type ModifiedImageProps = Omit<ImageProps, 'src' | 'alt'>;
type SocialProps = ODSIconTokenInterface &
  ModifiedImageProps & {
    format?: 'png' | 'svg';
  };

const Social = ({
  company,
  color,
  background,
  state,
  format,
  ...props
}: SocialProps) => {
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
      src={`${path}/${resource}.${format || 'png'}`}
      // onError={(e) => {
      //   const target = e.target as HTMLImageElement;
      //   target.style.opacity = '0';
      // }}
      alt={company}
    />
  );
};

Icon.Social = dynamic(() => Promise.resolve(Social), {});
export default Icon;
