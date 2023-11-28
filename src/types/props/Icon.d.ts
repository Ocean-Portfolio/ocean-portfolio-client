import { ImageProps } from 'next/image';

declare global {
  type ModifiedImageProps = Omit<ImageProps, 'src' | 'alt'>;
  type IconProps = ModifiedImageProps & {
    format?: 'png' | 'svg';
  };
  type CommonIconProps = IconProps & {
    variant: CommonIconToken;
  };
  type SocialIconProps = ODSIconTokenInterface &
    IconProps & {
      company: CompanyIconToken;
    };
}
