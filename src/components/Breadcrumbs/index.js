import { Box } from '@mui/material';
import Card from 'components/Card';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'components/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb = () => {
  return (
    <Box gridColumn={'span 3'} gridRow={'span 1'} height={{ md: '100%' }}>
      <Card sx={{ padding: '30px' }}>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              Core
            </Link>
            <Link
              underline="hover"
              color="primary.main"
              href="/components/breadcrumbs/"
              aria-current="page"
            >
              Breadcrumbs
            </Link>
          </Breadcrumbs>
        </div>
      </Card>
    </Box>
  );
};

export default Breadcrumb;
