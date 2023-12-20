import classNames from 'classnames';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { textPreStyle } from '@/styles/common/text.css';
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

interface Props {
  className?: string;
}

const Introduce = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <section className={classNames(className, wrapStyle)}>{children}</section>
  );
};

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h1 className={titleStyle}>{text}</h1>;
};

const BodyWrap = ({ children }: PropsWithChildren) => {
  return <div className={bodyWrapStyle}>{children}</div>;
};

interface ProfileProps {
  src: string;
  alt: string;
}

const Face = ({ src, alt }: ProfileProps) => {
  return (
    <div className={imageWrapStyle}>
      <Image
        fill
        className={imageStyle}
        src={src}
        alt={alt}
        sizes="(max-width: 599px) 90vw, (max-width: 940px) 12.5rem, (max-width: 1920px) 19.25rem"
      />
    </div>
  );
};

interface AboutMeProps {
  slogan: string;
  intro_text: string;
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
