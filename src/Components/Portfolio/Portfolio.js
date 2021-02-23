import React, { useEffect } from 'react';
import PortfolioItems from './PortfolioItems';
import Tree from '../Tree';
import { Typography } from '@material-ui/core';
import PortfolioItemExpanded from './PortfolioItemExpanded';
import { useSiteState } from '../../State/context';

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

      <PortfolioItems />

      {!!state.itemExpanded && <PortfolioItemExpanded />}
    </>
  );
};

export default Portfolio;
