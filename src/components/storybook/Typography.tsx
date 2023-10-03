import React from 'react';
import TypoBoard from '@/components/storybook/TypoBoard';
import GridSystem from '@/composable/GridSystem';
import Typo from '@/composable/Typo';

const sampleText = 'Anyone can develop';

const Typography = () => {
  return (
    <GridSystem
      tag="div"
      css={{
        padding: '30px 0 50px 50px',
      }}
    >
      <Typo tag="h1" typoToken="display-m-bold">
        Typography
      </Typo>
      <TypoBoard>
        <TypoBoard.Column>Token Name</TypoBoard.Column>
        <TypoBoard.Column>Font Size</TypoBoard.Column>
        <TypoBoard.Column>Line Height</TypoBoard.Column>
        <TypoBoard.Column>Sample</TypoBoard.Column>

        <TypoBoard.Title>display</TypoBoard.Title>
        <TypoBoard.Display typoToken="display-xl-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="display-l-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="display-m-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="display-s-medium">
          {sampleText}
        </TypoBoard.Display>

        <TypoBoard.Title>title</TypoBoard.Title>
        <TypoBoard.Display typoToken="title-xl-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="title-l-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="title-m-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="title-s-semibold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="title-s-medium">
          {sampleText}
        </TypoBoard.Display>

        <TypoBoard.Title>GNB</TypoBoard.Title>
        <TypoBoard.Display typoToken="GNB-l-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="GNB-l-medium">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="GNB-m-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="GNB-m-medium">
          {sampleText}
        </TypoBoard.Display>

        <TypoBoard.Title>paragraph-l</TypoBoard.Title>
        <TypoBoard.Display typoToken="paragraph-l-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="paragraph-l-medium">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="paragraph-l-semibold">
          {sampleText}
        </TypoBoard.Display>

        <TypoBoard.Title>paragraph-m</TypoBoard.Title>
        <TypoBoard.Display typoToken="paragraph-m-bold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="paragraph-m-medium">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="paragraph-m-semibold">
          {sampleText}
        </TypoBoard.Display>

        <TypoBoard.Title>paragraph-s</TypoBoard.Title>
        <TypoBoard.Display typoToken="paragraph-s-medium">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="paragraph-s-regular">
          {sampleText}
        </TypoBoard.Display>

        <TypoBoard.Title>caption</TypoBoard.Title>
        <TypoBoard.Display typoToken="caption-m-semibold">
          {sampleText}
        </TypoBoard.Display>
        <TypoBoard.Display typoToken="caption-m-medium">
          {sampleText}
        </TypoBoard.Display>
      </TypoBoard>
    </GridSystem>
  );
};

export default Typography;
