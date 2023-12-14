import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import SocialIcon, { SocialIconProps } from '../../composable/Icon/SocialIcon';
import ODSNextImage from '../../composable/Image/ODSNextImage';
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
      <span className={nameVariants[layout]}>{name}</span>
      <pre className={jobVariants[layout]}>{job}</pre>
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
