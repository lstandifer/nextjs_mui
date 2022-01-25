import React from 'react';
import { Box } from '@mui/material';
import Card from 'components/Card';

const Inventory = ({ children, isMobile }) => {
  return (
    <Box
      gridColumn={'span 1'}
      gridRow={'span 17'}
      height={{ md: '100%', xs: '900px' }}
      paddingTop={{ xs: 1, md: 0 }}
      maxWidth={{}}
      item
    >
      <Card>{children}</Card>
    </Box>
  );
};

export default Inventory;
