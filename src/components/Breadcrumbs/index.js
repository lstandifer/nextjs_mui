import { Box } from '@mui/material';
import Card from 'components/Card';

const Breadcrumbs = ({ children }) => {
  return (
    <Box gridColumn={'span 9'} height={{ md: '100%' }}>
      <Card>{children}</Card>
    </Box>
  );
};

export default Breadcrumbs;
