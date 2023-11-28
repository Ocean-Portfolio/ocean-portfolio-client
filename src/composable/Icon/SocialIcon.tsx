import Image, { ImageProps } from 'next/image';
import { ASSET_ENDPOINT } from '@/const/endpoint';
import iconResourceSrcFormat from '@/utils/string/iconResourceSrcFormat';

type ModifiedImageProps = Omit<ImageProps, 'src' | 'alt'>;
type SocialProps = ODSIconTokenInterface &
  ModifiedImageProps & {
    format?: 'png' | 'svg';
  };

const SocialIcon = ({
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
      alt={company}
    />
  );
};

export default SocialIcon;
