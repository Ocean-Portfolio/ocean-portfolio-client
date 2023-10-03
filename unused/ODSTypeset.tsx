import { Typeset } from '@storybook/blocks';
import React, { PropsWithChildren } from 'react';
import GridSystem from '@/composable/GridSystem';

interface Props {
  fontSizes: string[];
  fontFamily?: string;
  fontWeight?: number;
  sampleText?: string;
}

const ODSTypeset = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <>
      <GridSystem
        tag="div"
        css={{
          columnGap: '1.5rem',
          alignContent: 'flex-end',
        }}
        templateColumns="auto auto 1fr"
      >
        {children}
      </GridSystem>
      <Typeset {...rest} />
    </>
  );
};

export default ODSTypeset;
