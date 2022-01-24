import { Box } from '@mui/material';
import Card from 'components/Card';

const TopCard = ({ children, isMobile }) => {
  return (
    <Box
      gridColumn={`span 1`}
      gridRow={`span 5`}
      height={{ md: '100%', xs: '500px' }}
      paddingTop={isMobile ? 1 : ''}
    >
      <Card>{children}</Card>
    </Box>
  );
};

export default TopCard;
