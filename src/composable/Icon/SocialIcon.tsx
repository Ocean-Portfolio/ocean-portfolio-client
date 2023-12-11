import Image from 'next/image';
import iconAssetEndpoint from '@/utils/string/iconAssetEndpoint';
import socialIconResourceSrcFormat from '@/utils/string/socialIconResourceSrcFormat';

export type SocialIconProps = ODSIconTokenInterface &
  IconProps & {
    company: CompanyIconToken;
  };

const SocialIcon = ({
  company,
  color,
  background,
  state,
  format,
  ...props
}: SocialIconProps) => {
  const resource = socialIconResourceSrcFormat({
    company,
    color,
    background,
    state,
  });

  const path = iconAssetEndpoint(company);

  return (
    <Image
      {...props}
      src={`${path}/${resource}.${format || 'png'}`}
      alt={company}
    />
  );
};

export default SocialIcon;
