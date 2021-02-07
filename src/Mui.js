import React from 'react';
import { Button, ButtonGroup, Container, Typography } from '@material-ui/core';
import { theme } from './theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Portfolio from './Portfolio/Portfolio';

const Mui = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <ButtonGroup>
            <Button variant='contained' color='primary'>
              Home
            </Button>
            <Button variant='contained' color='primary'>
              Resume
            </Button>
            <Button variant='contained' color='primary'>
              GitHub
            </Button>
          </ButtonGroup>
          <Typography variant='h1'>Andrew Dauphinais</Typography>
          <Typography variant='subtitle1'>Web Developer</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            placeat id eveniet consequuntur, excepturi sint voluptatum maxime
            hic, incidunt animi magni nobis ipsum, dolorum provident pariatur ab
            unde commodi! Delectus?
          </p>
        </div>
        <Portfolio />
      </Container>
    </ThemeProvider>
  );
};

export default Mui;
