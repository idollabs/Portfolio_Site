import React from 'react';
import PortfolioItem from './Portfolio-Item';
import Tree from '../Tree';
import { Typography } from '@material-ui/core';

const Portfolio = () => {
  return (
    <>
      <Typography variant='h2' align='center'>
        Portfolio
      </Typography>{' '}
      <Tree />
      <br />
      <div className='portfolioContainer'>
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </>
  );
};

export default Portfolio;
