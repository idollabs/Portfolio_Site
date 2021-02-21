import React from 'react';
import {
  Button,
  ButtonGroup,
  Typography,
  Container,
  Toolbar,
  AppBar,
  Box,
} from '@material-ui/core';

const Navigation = () => {
  return (
    <div>
      <AppBar color='primary' position='sticky'>
        <Container maxWidth='lg'>
          <Box display='flex' justifyContent='center'>
            <Toolbar color='primary'>
              <ButtonGroup
                variant='text'
                color='secondary'
                aria-label='contained primary button group'
              >
                <Button>Home</Button>
                <Button>Resume</Button>
                <Button>GitHub</Button>
              </ButtonGroup>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navigation;