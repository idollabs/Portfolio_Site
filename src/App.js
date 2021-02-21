import React from 'react';
import { Container } from '@material-ui/core';
import { theme } from './theme';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Navigation from './Components/Navigation';
import Intro from './Components/Intro';
import Portfolio from './Components/Portfolio/Portfolio';

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    height: 'auto',
  },
});

const Mui = () => {
  const classes = useStyles();

  return (
    // <ContextProvider>
    <ThemeProvider theme={theme}>
      <Navigation />

      <Container maxWidth='lg' className={classes.root}>
        <Intro />
        <br />
        <br />

        <Portfolio />
      </Container>
    </ThemeProvider>
  );
};

export default Mui;
