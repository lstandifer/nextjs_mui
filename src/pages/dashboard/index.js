import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import TopCard from 'components/Card/TopCard';
import Inventory from 'components/Card/Inventory';
import Breadcrumbs from 'components/Breadcrumbs';
import StatCard from 'components/Card/StatCard';
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
}) => {
  const theme = useTheme();

  function getRandomSymNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return [
      {
        Asset: 'Symmetrix',
        RawCapacity: Math.floor(Math.random() * (max - min + 1) + min),
        color: theme.palette.primary.light,
      },
    ];
  }

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
      minWidth={'1fr'}
      padding={1}
    >
      {isMobile ? <Breadcrumbs isMobile>BreadCrumbs</Breadcrumbs> : null}
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmetrix Raw Capacity'}
          pieData={getRandomSymNumber(80000, 11150)}
          tooltipText={rawCapToolTip}
          theme={theme}
        />
      </TopCard>
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmetrix Total Capacity'}
          pieData={getRandomSymNumber(80000, 11150)}
          tooltipText={totalCapToolTip}
          theme={theme}
        />
      </TopCard>
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmterix Used Capacity'}
          pieData={getRandomSymNumber(80000, 11150)}
          tooltipText={usedCapToolTip}
          theme={theme}
        />
      </TopCard>
      <TopCard isMobile>
        <PieChart
          chartTitle={'Symmterix Free Capacity'}
          pieData={getRandomSymNumber(80000, 11150)}
          tooltipText={freeCapToolTip}
          theme={theme}
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
  return {
    props: {
      rawCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
      usedCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
      totalCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
      freeCapLineData: JSON.parse(JSON.stringify(generateLineChartData())),
    },
  };
}

export default Dashboard;
