import Image from 'next/image';
import React from 'react';
import iconAssetEndpoint from '@/utils/string/iconAssetEndpoint';

const CommonIcon = ({ variant, format, ...props }: CommonIconProps) => {
  const path = iconAssetEndpoint(variant);

  return <Image {...props} src={`${path}.${format || 'png'}`} alt={variant} />;
};

export default CommonIcon;
