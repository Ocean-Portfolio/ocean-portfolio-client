import classNames from 'classnames';
import React from 'react';
import LinkedButton from '@/composable/LinkedButton/LinkedButton';
import Mock from '@/composable/Mock/Mock';
import {
  backgroundGradientVariants,
  buttonStyle,
  contentWrapStyle,
  descriptionStyle,
  mockStyle,
  mockVariants,
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
      <div className={classNames(mockWrapVariants[device])}>
        <div
          className={classNames(
            backgroundGradientVariants[device],
            mockVariants[device],
          )}
        />
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
        <LinkedButton className={buttonStyle} size="M">
          더보기
        </LinkedButton>
      </div>
    </article>
  );
};

export default MainProject;
