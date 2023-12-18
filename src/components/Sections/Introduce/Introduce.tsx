import classNames from 'classnames';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { textPreStyle } from '@/styles/common/text.css';

interface Props {
  className?: string;
}

const Introduce = ({ children, className }: PropsWithChildren<Props>) => {
  return <section className={className}>{children}</section>;
};

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h1>{text}</h1>;
};

const BodyWrap = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

interface ProfileProps {
  src: string;
  alt: string;
}

const Face = ({ src, alt }: ProfileProps) => {
  return <Image src={src} alt={alt} width={300} height={300} />;
};

interface AboutMeProps {
  slogan: string;
  intro_text: string;
}

const AboutMe = ({ slogan, intro_text }: AboutMeProps) => {
  return (
    <article>
      <h2>{slogan}</h2>
      <p className={classNames(textPreStyle)}>{intro_text}</p>
    </article>
  );
};

Introduce.Title = Title;
Introduce.BodyWrap = BodyWrap;
Introduce.Face = Face;
Introduce.AboutMe = AboutMe;

export default Introduce;
