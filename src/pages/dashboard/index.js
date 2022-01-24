import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import TopCard from 'components/TopCard';
import Inventory from 'components/Inventory';
import Breadcrumbs from 'components/Breadcrumbs';
import StatCard from 'components/StatCard';
import dynamic from 'next/dynamic';
import generateLineChartData from 'helpers/generateLineChartData';
import Table from 'components/Table';
const PieChart = dynamic(() => import('components/Charts/PieChart'), {
  ssr: false,
});
const LineChart = dynamic(() => import('components/Charts/LineChart'), {
  ssr: false,
});

const Dashboard = ({
  rawCapLineData,
  usedCapLineData,
  totalCapLineData,
  freeCapLineData,
  pieChartData,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const rawCapToolTip =
    'This indicates the total raw capacity of all disks installed';
  const totalCapToolTip =
    'This indicates the total capacity that can be used to store user data.';
  const usedCapToolTip =
    'This indicates the total capacity that has used to store user data.';
  const freeCapToolTip =
    'This indicates the total capacity that is available to store user data.';

  return (
    <Box
      display={isMobile ? 'block' : 'grid'}
      gridTemplateColumns="repeat(4, 1fr)"
      gridTemplateRows={'repeat(22, 1fr)'}
      gap={1}
      height={{ xs: '100%', md: '100vh' }}
      padding={1}
    >
      {isMobile ? <Breadcrumbs isMobile>BreadCrumbs</Breadcrumbs> : null}
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmetrix Raw Capacity'}
          pieData={pieChartData}
          tooltipText={rawCapToolTip}
        />
      </TopCard>
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmetrix Total Capacity'}
          pieData={pieChartData}
          tooltipText={totalCapToolTip}
        />
      </TopCard>
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmterix Used Capacity'}
          pieData={pieChartData}
          tooltipText={usedCapToolTip}
        />
      </TopCard>
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmterix Free Capacity'}
          pieData={pieChartData}
          tooltipText={freeCapToolTip}
        />
      </TopCard>
      <Inventory isMobile>
        <Table />
      </Inventory>
      {isMobile ? null : <Breadcrumbs isMobile>BreadCrumbs</Breadcrumbs>}
      <StatCard isMobile>
        <LineChart title={'Raw Capacity'} lineData={rawCapLineData} />
      </StatCard>
      <StatCard isMobile>
        <LineChart title={'Used Capacity'} lineData={usedCapLineData} />
      </StatCard>
      <StatCard isMobile>
        <LineChart title={'Total Capacity'} lineData={totalCapLineData} />
      </StatCard>
      <StatCard isMobile>
        <LineChart title={'Free Capacity'} lineData={freeCapLineData} />
      </StatCard>
    </Box>
  );
};

export async function getServerSideProps() {
  let pieChartData = [
    {
      Asset: 'Symmetrix',
      RawCapacity: 9512.6,
      color: '#e83742',
    },
  ];

  return {
    props: {
      pieChartData: JSON.parse(JSON.stringify(pieChartData)),
      rawCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
      usedCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
      totalCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
      freeCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
    },
  };
}

export default Dashboard;
