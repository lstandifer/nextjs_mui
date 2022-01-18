import React from 'react';
import { Box } from '@mui/material';
import Card from 'components/Card';

const Inventory = ({ children, isMobile }) => {
  return (
    <Box
      gridColumn={'span 3'}
      gridRow={'span 17'}
      height={{ md: '100%', xs: '900px' }}
      paddingTop={isMobile ? 1 : ''}
    >
      <Card>{children}</Card>
    </Box>
  );
};

export default Inventory;
