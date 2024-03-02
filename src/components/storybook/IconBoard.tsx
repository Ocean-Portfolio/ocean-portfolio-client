import React from 'react';
import Grid from '@/composable/Grid/Grid';
import CommonIcon from '@/composable/Icon/CommonIcon';
import SocialIcon from '@/composable/Icon/SocialIcon';
import Text from '@/composable/Text/Text';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';

const IconBoard = () => {
  const gridStyle = {
    width: 'fit-content',
    justifyItems: 'center',
    alignItems: 'center',
    rowGap: '1rem',
    columnGap: '2rem',
    margin: '1rem 0',
    padding: '1.5rem',
    borderRadius: '1rem',
  };

  return (
    <>
      <Text
        as="h1"
        typoToken="display-m-bold"
        className={colorVariants['gray-scale-04']}
        style={{
          marginBottom: '20px',
        }}
      >
        Common Icons
      </Text>

      <Grid
        className={backgroundColorVariants['gray-scale-01']}
        autoFlow="column"
        autoColumns="auto"
        style={gridStyle}
      >
        <IconBoard.Common />
      </Grid>
      <Grid
        className={backgroundColorVariants['gray-scale-03']}
        autoFlow="column"
        autoColumns="auto"
        style={gridStyle}
      >
        <IconBoard.Common2 />
      </Grid>
      <Text
        as="h1"
        typoToken="display-m-bold"
        className={colorVariants['gray-scale-04']}
        style={{
          marginBottom: '20px',
        }}
      >
        Social Icons
      </Text>
      <Grid
        className={backgroundColorVariants['gray-scale-01']}
        autoFlow="column"
        templateColumns="repeat(16, 2rem)"
        templateRows="repeat(19, 2rem)"
        style={gridStyle}
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

interface CommonProps {
  format?: 'png' | 'svg';
}

const Common = ({ format }: CommonProps) => {
  return (
    <>
      <CommonIcon variant="DOWN_ARROW" width={32} height={32} format={format} />
      <CommonIcon variant="HAMBURGER" width={32} height={32} format={format} />
      <CommonIcon
        variant="LARGE_CLOSE"
        width={32}
        height={32}
        format={format}
      />
      <CommonIcon variant="LEFT_ARROW" width={32} height={32} format={format} />
      <CommonIcon
        variant="NORMAL_CLOSE"
        width={32}
        height={32}
        format={format}
      />
      <CommonIcon
        variant="ROUND_CLOSE"
        width={32}
        height={32}
        format={format}
      />
      <CommonIcon variant="UP_ARROW" width={32} height={32} format={format} />
      <CommonIcon variant="PLUS" width={32} height={32} format={format} />
    </>
  );
};

const Common2 = ({ format }: CommonProps) => {
  return (
    <>
      <CommonIcon
        variant="RIGHT_TAIL_ARROW"
        width={36}
        height={36}
        format={format}
      />
      <CommonIcon
        variant="RIGHT_TAIL_ARROW_MEDIUM"
        width={48}
        height={48}
        format={format}
      />
      <CommonIcon
        variant="RIGHT_TAIL_ARROW_SECONDARY_VARIANT"
        userToken="sungyeon"
        width={36}
        height={36}
        format={format}
      />
      <CommonIcon
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        userToken="sungyeon"
        width={36}
        height={36}
        format={format}
      />
      <CommonIcon variant="MEATBALL" width={24} height={24} format={format} />
      <CommonIcon
        variant="PAGINATION_SELECTED_SKY_BLUE_LARGE"
        width={44}
        height={44}
        format={format}
      />
      <CommonIcon
        variant="PAGINATION_SELECTED_SKY_BLUE_MEDIUM"
        width={40}
        height={40}
        format={format}
      />
      <CommonIcon
        variant="PAGINATION_UNSELECTED_SKY_BLUE_LARGE"
        width={24}
        height={24}
        format={format}
      />
      <CommonIcon
        variant="PAGINATION_UNSELECTED_SKY_BLUE_MEDIUM"
        width={16}
        height={16}
        format={format}
      />
    </>
  );
};

IconBoard.Social = Social;
IconBoard.Common = Common;
IconBoard.Common2 = Common2;

export default IconBoard;
