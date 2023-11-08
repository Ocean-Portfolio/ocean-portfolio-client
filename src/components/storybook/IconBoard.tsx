import React from 'react';
import Grid from '@/composable/Grid/Grid';
import Icon from '@/composable/Icon/Icon';
import { backgroundColorVariants } from '@/styles/color.css';

const IconBoard = () => {
  return (
    <Grid
      className={backgroundColorVariants['gray-scale-01']}
      autoFlow="column"
      templateColumns="repeat(16, 2rem)"
      templateRows="repeat(19, 2rem)"
      style={{
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
    </Grid>
  );
};

interface SocialProps {
  company: CompanyIconToken;
  format?: 'png' | 'svg';
}

const Social = ({ company, format }: SocialProps) => {
  return (
    <>
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="BRAND"
        background="NONE"
        state="DEFAULT"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="BRAND"
        background="CIRCULAR"
        state="DEFAULT"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="BRAND"
        background="RECTANGLAR"
        state="DEFAULT"
      />
      <br />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="NONE"
        state="DEFAULT"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="CIRCULAR"
        state="DEFAULT"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="RECTANGLAR"
        state="DEFAULT"
      />
      <br />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="NONE"
        state="HOVER"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="CIRCULAR"
        state="HOVER"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="GRAY"
        background="RECTANGLAR"
        state="HOVER"
      />
      <br />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="NONE"
        state="DEFAULT"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="CIRCULAR"
        state="DEFAULT"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="DEFAULT"
      />
      <br />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="HOVER"
      />
      <Icon
        width={32}
        height={32}
        company={company}
        format={format}
        color="WHITE"
        background="RECTANGLAR"
        state="HOVER"
      />
      <Icon
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
