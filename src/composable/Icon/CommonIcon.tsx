import Image from 'next/image';
import React from 'react';
import iconAssetEndpoint from '@/utils/string/iconAssetEndpoint';

type CommonIconProps = IconProps & {
  variant: CommonIconToken;
};

const CommonIcon = ({ variant, format, ...props }: CommonIconProps) => {
  const path = iconAssetEndpoint(variant, '/common');

  return <Image {...props} src={`${path}.${format || 'png'}`} alt={variant} />;
};

export default CommonIcon;
