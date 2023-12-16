import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import {
  captionStyle,
  profileListStyle,
  titleStyle,
  wrapStyle,
} from '@/components/Pages/Home/Home.css';
import Container from '@/composable/Container/Container';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { defaultColorTheme } from '@/styles/theme/default.css';

const Home = ({ children }: PropsWithChildren) => {
  return (
    <Home.Wrap>
      <Home.Title />
      <Home.Caption />
      <Home.Makers>{children}</Home.Makers>
    </Home.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren) => {
  return (
    <Container
      as="main"
      className={classNames(
        defaultColorTheme,
        wrapStyle,
        backgroundColorVariants['tertiary'],
      )}
    >
      {children}
    </Container>
  );
};

const Title = () => {
  return (
    <h1 className={classNames(titleStyle, colorVariants['gray-scale-00'])}>
      Brand-ing Me
      <br />
      Ocean Portfolio
    </h1>
  );
};

const Caption = () => {
  return (
    <p className={classNames(captionStyle, colorVariants['secondary-variant'])}>
      Makers
    </p>
  );
};

const Makers = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={classNames(
        profileListStyle,
        backgroundColorVariants['secondary-variant'],
      )}
    >
      {children}
    </div>
  );
};

Home.Wrap = Wrap;
Home.Title = Title;
Home.Caption = Caption;
Home.Makers = Makers;

export default Home;
