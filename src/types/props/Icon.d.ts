import { ImageProps } from 'next/image';

declare global {
  type ModifiedImageProps = Omit<ImageProps, 'src' | 'alt'>;
  type IconProps = ModifiedImageProps & {
    format?: 'png' | 'svg';
  };
}
