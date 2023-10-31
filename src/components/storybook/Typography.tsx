import React from 'react';
import FontBoard from '@/components/storybook/FontBoard';
import Grid from '@/composable/Grid/Grid';
import Text from '@/composable/Text/Text';
import { globalThemeVars } from '@/styles/theme.css';

const sampleText = 'Anyone can develop';

const Typography = () => {
  return (
    <Grid
      as="div"
      style={{
        padding: '30px 50px',
      }}
    >
      <Text
        as="h1"
        typoToken="display-m-bold"
        style={{
          marginBottom: '20px',
          color: globalThemeVars.color['gray-scale-06'],
        }}
      >
        Typography
      </Text>
      <FontBoard>
        <FontBoard.Column>Token Name</FontBoard.Column>
        <FontBoard.Column>Font Size</FontBoard.Column>
        <FontBoard.Column>Line Height</FontBoard.Column>
        <FontBoard.Column>Letter Spacing</FontBoard.Column>
        <FontBoard.Column>Sample</FontBoard.Column>

        <FontBoard.Title>display</FontBoard.Title>
        <FontBoard.Display typoToken="display-xl-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="display-l-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="display-m-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="display-s-medium">
          {sampleText}
        </FontBoard.Display>

        <FontBoard.Title>title</FontBoard.Title>
        <FontBoard.Display typoToken="title-xl-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="title-l-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="title-m-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="title-s-semibold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="title-s-medium">
          {sampleText}
        </FontBoard.Display>

        <FontBoard.Title>GNB</FontBoard.Title>
        <FontBoard.Display typoToken="GNB-l-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="GNB-l-medium">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="GNB-m-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="GNB-m-medium">
          {sampleText}
        </FontBoard.Display>

        <FontBoard.Title>paragraph-l</FontBoard.Title>
        <FontBoard.Display typoToken="paragraph-l-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="paragraph-l-medium">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="paragraph-l-semibold">
          {sampleText}
        </FontBoard.Display>

        <FontBoard.Title>paragraph-m</FontBoard.Title>
        <FontBoard.Display typoToken="paragraph-m-bold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="paragraph-m-medium">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="paragraph-m-semibold">
          {sampleText}
        </FontBoard.Display>

        <FontBoard.Title>paragraph-s</FontBoard.Title>
        <FontBoard.Display typoToken="paragraph-s-medium">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="paragraph-s-regular">
          {sampleText}
        </FontBoard.Display>

        <FontBoard.Title>caption</FontBoard.Title>
        <FontBoard.Display typoToken="caption-m-semibold">
          {sampleText}
        </FontBoard.Display>
        <FontBoard.Display typoToken="caption-m-medium">
          {sampleText}
        </FontBoard.Display>
      </FontBoard>
    </Grid>
  );
};

export default Typography;
