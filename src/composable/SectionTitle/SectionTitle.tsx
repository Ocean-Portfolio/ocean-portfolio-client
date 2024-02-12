import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { sectionTitleStyle } from './SectionTitle.css';

interface SectionTitleProps {
  className?: string;
}

const SectionTitle = ({
  children,
  className,
}: PropsWithChildren<SectionTitleProps>) => {
  return (
    <h1 className={classNames(sectionTitleStyle, className)}>{children}</h1>
  );
};

export default SectionTitle;
