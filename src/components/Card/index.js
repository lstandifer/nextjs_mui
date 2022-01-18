import React from 'react';
import Paper from '@mui/material/Paper';

const Card = (props) => {
  return (
    <Paper elevation={3} sx={{ height: '100%', padding: 2 }} {...props}>
      {props.children}
    </Paper>
  );
};

export default Card;
