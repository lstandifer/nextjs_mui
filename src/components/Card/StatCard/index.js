import { Box } from '@mui/material';
import Card from 'components/Card';

const StatCard = ({ children, isMobile }) => {
  return (
    <Box
      gridColumn={'span 3'}
      gridRow={'span 4'}
      height={{ md: '100%', xs: '500px' }}
      paddingTop={isMobile ? 1 : ''}
    >
      <Card>{children}</Card>
    </Box>
  );
};

export default StatCard;
