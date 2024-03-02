import Image from 'next/image';
import React from 'react';
import iconAssetEndpoint from '@/utils/string/iconAssetEndpoint';

type CommonIconProps = IconProps & {
  variant: CommonIconToken;
  userToken?: UserNameToken;
};

const CommonIcon = ({
  variant,
  userToken,
  format,
  ...props
}: CommonIconProps) => {
  const path = iconAssetEndpoint({
    iconName: variant,
    userName: userToken,
    prefix: '/common',
  });

  return <Image {...props} src={`${path}.${format || 'png'}`} alt={variant} />;
};

export default CommonIcon;
