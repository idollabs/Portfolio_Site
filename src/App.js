import React from 'react';
import { Container } from '@material-ui/core';
import { theme } from './theme';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Navigation from './Components/Navigation';
import Intro from './Components/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import { ContextProvider } from './State/context';

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    height: '100%',
  },
});

const Mui = () => {
  const classes = useStyles();

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Navigation />

        <Container maxWidth='lg' className={classes.root}>
          <Intro />
          <br />
          <br />

          <Portfolio />
        </Container>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default Mui;
