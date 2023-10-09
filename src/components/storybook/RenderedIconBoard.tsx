import React from 'react';
import Grid from '@/composable/Grid/Grid';
import Instagram from '@/composable/RenderedIcon/Instagram';
import LinkedIn from '@/composable/RenderedIcon/LinkedIn';
import Twitter from '@/composable/RenderedIcon/Twitter';

const RenderedIconBoard = () => {
  return (
    <Grid
      autoFlow="row"
      templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
      style={{
        justifyItems: 'center',
        alignItems: 'center',
        gap: '1rem',
        margin: '1rem 0',
      }}
    >
      <LinkedIn />
      <Instagram />
      <Twitter />
    </Grid>
  );
};

export default RenderedIconBoard;
