import React from 'react';
import { Button, Paper, Card } from '@material-ui/core';
import PortfolioItem from './Portfolio-Item';

const Portfolio = () => {
  return (
    <div className='portfolioContainer'>
      {/* <div className='portfolioItem'></div>
      <div className='portfolioItem'></div>
      <div className='portfolioItem'></div>
      <div className='portfolioItem'></div> */}
      <Paper style={{ height: 75, width: 50, backgroundColor: '#f4f4f4' }}>
        <Button color='primary'>Hello</Button>
      </Paper>
      <Paper style={{ height: 75, width: 50 }} />
      <Paper style={{ height: 75, width: 50 }} />

      <Card style={{ height: 75, width: 50, backgroundColor: '#f4f4f4' }}>
        Hello
      </Card>
      <PortfolioItem />
    </div>
  );
};

export default Portfolio;
