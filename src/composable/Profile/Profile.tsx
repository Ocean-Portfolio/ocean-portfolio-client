import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import SocialIcon, { SocialIconProps } from '../Icon/SocialIcon';
import ODSNextImage from '../Image/ODSNextImage';
import Text from '../Text/Text';
import {
  iconLayouts,
  imageVariants,
  jobVariants,
  nameVariants,
  socialWrapVariants,
  wrapVariants,
} from './Profile.css';

interface Props {
  className?: string;
  layout: 'HORIZONTAL' | 'VERTICAL';
  src: string;
  alt: string;
  name: string;
  job: string;
  social?: Array<
    SocialIconProps & {
      url: string;
    }
  >;
}

const Profile = ({ className, layout, src, alt, name, job, social }: Props) => {
  return (
    <div className={classNames(wrapVariants[layout], className)}>
      <ODSNextImage
        className={imageVariants[layout]}
        src={src}
        sizeToken={layout === 'HORIZONTAL' ? 'image-50' : 'image-65'}
        alt={alt}
      />
      <Text
        className={nameVariants[layout]}
        typoToken={
          layout === 'HORIZONTAL' ? 'paragraph-m-semibold' : 'GNB-l-bold'
        }
      >
        {name}
      </Text>
      <Text
        as="pre"
        className={jobVariants[layout]}
        typoToken={'paragraph-s-regular'}
        style={{
          textAlign: 'center',
        }}
      >
        {job}
      </Text>
      {social && (
        <div className={socialWrapVariants[layout]}>
          {social.map(({ url, company, color, background, state }) => {
            return (
              <Link
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer noopner"
              >
                <SocialIcon
                  company={company}
                  color={color}
                  background={background}
                  state={state}
                  width={calcRemToPxNumber(iconLayouts[layout].width)}
                  height={calcRemToPxNumber(iconLayouts[layout].height)}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;
