import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import TopCard from 'components/TopCard';
import Breadcrumbs from 'components/Breadcrumbs';
import StatCard from 'components/StatCard';
import Inventory from 'components/Inventory';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display={isMobile ? 'block' : 'grid'}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows={'repeat(22, 1fr)'}
      gap={1}
      height={'100vh'}
    >
      {isMobile ? <Breadcrumbs isMobile>BreadCrumbs</Breadcrumbs> : null}
      <TopCard isMobile>Top Card 1</TopCard>
      <TopCard isMobile>Top Card 2</TopCard>
      <TopCard isMobile>Top Card 3</TopCard>
      <TopCard isMobile>Top Card 4</TopCard>
      <Inventory isMobile>Inventory Card</Inventory>
      {isMobile ? null : <Breadcrumbs isMobile>BreadCrumbs</Breadcrumbs>}
      <StatCard isMobile>Stats Card 1</StatCard>
      <StatCard isMobile>Stats Card 2</StatCard>
      <StatCard isMobile>Stats Card 3</StatCard>
      <StatCard isMobile>Stats Card 4</StatCard>
    </Box>
  );
};

export default Dashboard;
