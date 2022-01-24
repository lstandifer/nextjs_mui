import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import TopCard from 'components/TopCard';
import Inventory from 'components/Inventory';
import Breadcrumbs from 'components/Breadcrumbs';
import StatCard from 'components/StatCard';
import dynamic from 'next/dynamic';
import generateLineChartData from 'helpers/generateLineChartData';
import generatePieChartData from 'helpers/generatePieChartData';

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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  //
  // const [rawCapLineData, setRawCapLineData] = useState([]);
  // const [usedCapLineData, setUsedCapLineData] = useState([]);
  // const [totalCapLineData, setTotalCapLineData] = useState([]);
  // const [freeCapLineData, setFreeCapLineData] = useState([]);

  // // data for free capacity pie chart
  // useEffect(() => {
  //   let pieChartData = [
  //     {
  //       Asset: 'Symmetrix',
  //       RawCapacity: 9512.5,
  //     },
  //   ];

  //   setRawCapacityPieData(pieChartData);
  //   setTotalCapacityPieData(pieChartData);
  //   setUsedCapacityPieData(pieChartData);
  //   setFreeCapacityPieData(pieChartData);

  //   dispatch(fetchSymmetrix(token));
  // }, [token, dispatch]);

  // data for line charts
  // useEffect(() => {
  //   let data = generateChartData();

  //   console.log(data);
  //   setRawCapLineData(data);
  //   setFreeCapLineData(data);
  //   setUsedCapLineData(data);
  //   setTotalCapLineData(data);

  //   return () => {};
  // }, []);

  return (
    <Box
      display={isMobile ? 'block' : 'grid'}
      gridTemplateColumns="repeat(4, 1fr)"
      gridTemplateRows={'repeat(22, 1fr)'}
      gap={1}
      height={{ xs: '100%', md: '100vh' }}
    >
      {isMobile ? <Breadcrumbs isMobile>BreadCrumbs</Breadcrumbs> : null}
      <TopCard isMobile>Top Card 1</TopCard>
      <TopCard isMobile>Top Card 2</TopCard>
      <TopCard isMobile>Top Card 3</TopCard>
      <TopCard isMobile>Top Card 4</TopCard>
      <Inventory isMobile>Inventory Card</Inventory>
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
