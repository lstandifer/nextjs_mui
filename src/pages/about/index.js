import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'components/Link';
import Layout from 'components/Layout';

export default function About() {
  return (
    <Layout>
      <Container maxWidth="sm" disableGutters>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/"
            color="primary"
          >
            Go to the main page
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}