import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Intro = () => {
  return (
    <div>
      <br />
      <Typography variant='h1' align='center'>
        <Box marginTop='60px'> Andrew Dauphinais</Box>
      </Typography>
      <br />
      <Typography variant='h2' align='center'>
        Web Developer
      </Typography>{' '}
      <br />
      {/* <p className='introParagraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat
        id eveniet consequuntur, excepturi sint voluptatum maxime hic, incidunt
        animi magni nobis ipsum, dolorum provident pariatur ab unde commodi!
        Delectus?
      </p> */}
    </div>
  );
};

export default Intro;
