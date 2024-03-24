import React, { PropsWithChildren } from 'react';
import Spacer from '@/composable/Spacer/Spacer';
import { bottomSpacerStyle, wrapStyle } from './TextTabGroup.css';

const TextTabGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapStyle}>
      {children}
      <Spacer className={bottomSpacerStyle} spacing="spacer-0125" />
    </div>
  );
};

export default TextTabGroup;
