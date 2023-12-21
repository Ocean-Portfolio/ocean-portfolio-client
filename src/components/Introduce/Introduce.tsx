import classNames from 'classnames';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { textPreStyle } from '@/styles/common/text.css';
import { getStaticContext } from '@/utils/context/StaticContext';
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
  title,
  slogan,
  intro_text,
  visible_status,
  image,
}: PropsWithChildren<IntroduceProps>) => {
  return (
    <StaticContextIntroduce.Provider
      value={{ id, title, slogan, intro_text, visible_status, image }}
    >
      <section className={classNames(className, wrapStyle)}>{children}</section>
    </StaticContextIntroduce.Provider>
  );
};
const Title = () => {
  const { title } = getStaticContext(StaticContextIntroduce);
  return <h1 className={titleStyle}>{title}</h1>;
};

const BodyWrap = ({ children }: PropsWithChildren) => {
  return <div className={bodyWrapStyle}>{children}</div>;
};

const Face = () => {
  const { image } = getStaticContext(StaticContextIntroduce);
  return (
    <div className={imageWrapStyle}>
      <Image
        fill
        className={imageStyle}
        src={image?.storage_url || ''}
        alt={image?.description || ''}
        sizes="(max-width: 599px) 90vw, (max-width: 1280px) 12.5rem, (max-width: 1920px) 19.25rem"
      />
    </div>
  );
};

const AboutMe = () => {
  const { slogan, intro_text } = getStaticContext(StaticContextIntroduce);
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
