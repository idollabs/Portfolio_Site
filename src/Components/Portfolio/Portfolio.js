import React, { useEffect } from 'react';
import PortfolioItem from './Portfolio-Item';
import Tree from '../Tree';
import { Typography } from '@material-ui/core';
import PortfolioItemExpanded from './PortfolioItemExpanded';
import { useSiteState } from '../../State/reducer';

const Portfolio = () => {
  const { state, togglePortfolioItem } = useSiteState();

  return (
    <>
      <Typography variant='h2' align='center'>
        Portfolio
      </Typography>
      <Tree />
      <br />
      <br />
      <div className='portfolioContainer'>
        <PortfolioItem onClick={togglePortfolioItem} />
        <PortfolioItem onClick={togglePortfolioItem} />
        <PortfolioItem onClick={togglePortfolioItem} />
      </div>

      <button onClick={togglePortfolioItem}>test</button>
      {state.itemExpanded && <PortfolioItemExpanded />}
    </>
  );
};

export default Portfolio;
