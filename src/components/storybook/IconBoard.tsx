import React from 'react';
import Grid from '@/composable/Grid/Grid';
import SocialIcon from '@/composable/Icon/SocialIcon';
import Text from '@/composable/Text/Text';
import { backgroundColorVariants } from '@/styles/color.css';
import { globalThemeVars } from '@/styles/theme.css';

const IconBoard = () => {
  return (
    <>
      <Text
        as="h1"
        typoToken="display-m-bold"
        style={{
          marginBottom: '20px',
          color: globalThemeVars.color['gray-scale-04'],
        }}
      >
        Skill Icons
      </Text>

      <Text
        as="h1"
        typoToken="display-m-bold"
        style={{
          marginBottom: '20px',
          color: globalThemeVars.color['gray-scale-04'],
        }}
      >
        Social Icons
      </Text>
      <Grid
        className={backgroundColorVariants['gray-scale-01']}
        autoFlow="column"
        templateColumns="repeat(16, 2rem)"
        templateRows="repeat(19, 2rem)"
        style={{
          width: 'fit-content',
          justifyItems: 'center',
          alignItems: 'center',
          rowGap: '1rem',
          columnGap: '2rem',
          margin: '1rem 0',
          padding: '1.5rem',
          borderRadius: '1rem',
        }}
      >
        <IconBoard.Social company="GOOGLE" />
        <IconBoard.Social company="FACEBOOK" />
        <IconBoard.Social company="TWITTER" />
        <IconBoard.Social company="LINKEDIN" />
        <IconBoard.Social company="INSTAGRAM" />
        <IconBoard.Social company="YOUTUBE" />
        <IconBoard.Social company="PINTEREST" />
        <IconBoard.Social company="MEDIUM" />
        <IconBoard.Social company="GITHUB" />
        <IconBoard.Social company="FIGMA" />
        <IconBoard.Social company="DRIBBBLE" />
        <IconBoard.Social company="TIKTOK" />
        <IconBoard.Social company="WHATSAPP" />
        <IconBoard.Social company="BEHANCE" />
        <IconBoard.Social company="NOTION" />
        <IconBoard.Social company="DISQUITE" />
      </Grid>
    </>
  );
};

interface SocialProps {
  company: CompanyIconToken;
  format?: 'png' | 'svg';
}

const Social = ({ company, format }: SocialProps) => {
  return (
    <>
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="BRAND"
        background="NONE"
        state="DEFAULT"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="BRAND"
        background="CIRCULAR"
        state="DEFAULT"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="BRAND"
        background="RECTANGLAR"
        state="DEFAULT"
      />
      <br />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="NONE"
        state="DEFAULT"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="CIRCULAR"
        state="DEFAULT"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="RECTANGLAR"
        state="DEFAULT"
      />
      <br />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="NONE"
        state="HOVER"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="CIRCULAR"
        state="HOVER"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="RECTANGLAR"
        state="HOVER"
      />
      <br />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="NONE"
        state="DEFAULT"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="CIRCULAR"
        state="DEFAULT"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="DEFAULT"
      />
      <br />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="HOVER"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="HOVER"
      />
      <SocialIcon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="HOVER"
      />
    </>
  );
};

IconBoard.Social = Social;

export default IconBoard;
