import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'components/Link';
import Layout from 'components/Layout';

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm" disableGutters="true">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/about"
            color="primary"
          >
            Go to the about page
          </Button>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/registration"
            color="primary"
          >
            Go to the registration page
          </Button>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/users"
            color="primary"
          >
            Go to the users page
          </Button>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/dashboard"
            color="primary"
          >
            Go to the dashboard page
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
