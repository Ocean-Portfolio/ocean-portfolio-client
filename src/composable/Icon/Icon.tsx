import Image, { ImageProps } from 'next/image';
import React from 'react';
import { ASSET_ENDPOINT } from '@/const/endpoint';
import iconResourceSrcFormat from '@/utils/iconResourceSrcFormat';

type Props = ODSIconTokenInterface & ImageProps;

const Icon = ({ company, color, background, state, ...props }: Props) => {
  const resource = iconResourceSrcFormat({
    company,
    color,
    background,
    state,
  });

  const path = `${ASSET_ENDPOINT}/icons/${company}`;

  return <Image {...props} src={`${path}/${resource}`} alt={company} />;
};

export default Icon;
