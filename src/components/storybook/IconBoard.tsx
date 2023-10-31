import React from 'react';
import Grid from '@/composable/Grid/Grid';
const IconBoard = () => {
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
    ></Grid>
  );
};

export default IconBoard;
