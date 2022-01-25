import React from 'react';
// import Paper from '@mui/material/Paper';

import StyledPaper from './styled';

const Card = (props) => {
  return (
    <StyledPaper elevation={3} {...props}>
      {props.children}
    </StyledPaper>
  );
};

export default Card;
