import { Grid } from '@mui/material';
import * as React from 'react';

const Landing: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <h1>Emailify</h1>
      <span>Collect feedback form your users</span>
    </Grid>
  );
};

export default Landing;
