import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'components/Link';
import config from 'config.json';

import { StyledFooter } from './styled';

const Copyright = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          {config.footerWebSiteOwner}
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </StyledFooter>
  );
};

export default Copyright;
