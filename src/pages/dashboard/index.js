import React from 'react';
import Grid from '@mui/material/Grid';
import Card from 'components/Card';
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card>xssdfsdfsdfsdfds</Card>
        </Grid>
        <Grid item xs>
          <Card>xs=6</Card>
        </Grid>
        <Grid item xs>
          <Card>xs</Card>
        </Grid>
        <Grid item xs>
          <Card>xs</Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
