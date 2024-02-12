import classNames from 'classnames';
import React from 'react';
import Button from '@/composable/Button/Button';
import Mock from '@/composable/Mock/Mock';
import {
  buttonStyle,
  contentWrapStyle,
  descriptionStyle,
  mockStyle,
  mockVariants,
  mockWrapStyle,
  mockWrapVariants,
  periodStyle,
  titleStyle,
  wrapStyle,
  wrapVariants,
} from './MainProject.css';

interface Props {
  src: string;
  device: MockupTypeToken;
  title: string;
  period: string;
  description: string;
}

const MainProject = ({ src, device, title, period, description }: Props) => {
  return (
    <article className={classNames(wrapStyle, wrapVariants[device])}>
      <div className={classNames(mockWrapStyle, mockWrapVariants[device])}>
        <Mock
          className={classNames(mockStyle, mockVariants[device])}
          src={src}
          device={device}
        />
      </div>
      <div className={contentWrapStyle}>
        <p className={titleStyle}>{title}</p>
        <p className={periodStyle}>{period}</p>
        <p className={descriptionStyle}>{description}</p>
        <Button className={buttonStyle} as="button" size="M">
          더보기
        </Button>
      </div>
    </article>
  );
};

export default MainProject;
