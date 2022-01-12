import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import config from 'config.json';

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <MuiLink color='inherit' href='https://mui.com/'>
        {config.footerWebSiteOwner}
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;
