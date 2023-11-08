import Image, { ImageProps } from 'next/image';
import React from 'react';
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
      alt={company}
    />
  );
};

export default Icon;
