import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Card = ({ children }) => {
  return (
    <Paper elevation="3" sx={{ padding: 2 }}>
      {children}
    </Paper>
  );
};

export default Card;
