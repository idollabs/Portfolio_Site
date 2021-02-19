import React from 'react';
import { Container } from '@material-ui/core';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from './Components/Navigation';
import Intro from './Components/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Tree from './Components/Tree';

const Mui = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />

      <Container maxWidth='lg'>
        <Intro />
        <br />
        <Tree />
        <br />

        <Portfolio />
      </Container>
    </ThemeProvider>
  );
};

export default Mui;
