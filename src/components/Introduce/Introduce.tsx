import classNames from 'classnames';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { textPreStyle } from '@/styles/common/text.css';
import { GetImageByIdQuery } from '@/types/graphql';
import {
  IntroduceContextProps,
  StaticContextIntroduce,
} from './Introduce.context';
import {
  aboutMeStyle,
  articleWrapStyle,
  bodyWrapStyle,
  imageStyle,
  imageWrapStyle,
  introTextStyle,
  sloganStyle,
  titleStyle,
  wrapStyle,
} from './Introduce.css';

export interface IntroduceProps extends IntroduceContextProps {
  className?: string;
}

const Introduce = ({
  children,
  className,
  id,
}: PropsWithChildren<IntroduceProps>) => {
  return (
    <StaticContextIntroduce.Provider value={{ id }}>
      <section className={classNames(className, wrapStyle)}>{children}</section>
    </StaticContextIntroduce.Provider>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={titleStyle}>{children}</h1>;
};

const BodyWrap = ({ children }: PropsWithChildren) => {
  return <div className={bodyWrapStyle}>{children}</div>;
};

interface FaceProps {
  image?: GetImageByIdQuery['getImageById'];
}

const Face = ({ image }: FaceProps) => {
  return (
    <div className={imageWrapStyle}>
      <Image
        fill
        className={imageStyle}
        src={image?.storage_url || ''}
        alt={image?.description || ''}
        sizes="(max-width: 599px) 320px, (max-width: 1280px) 200px, (max-width: 1920px) 308px"
      />
    </div>
  );
};

interface AboutMeProps {
  slogan: string | null | undefined;
  intro_text: string | null | undefined;
}

const AboutMe = ({ slogan, intro_text }: AboutMeProps) => {
  return (
    <article className={articleWrapStyle}>
      <p className={aboutMeStyle}>ABOUT ME</p>
      <h2 className={sloganStyle}>{slogan}</h2>
      <p className={classNames(textPreStyle, introTextStyle)}>{intro_text}</p>
    </article>
  );
};

Introduce.Title = Title;
Introduce.BodyWrap = BodyWrap;
Introduce.Face = Face;
Introduce.AboutMe = AboutMe;

export default Introduce;
