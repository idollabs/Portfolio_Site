import React, { useState, createContext } from 'react';
import PortfolioItem from './Portfolio-Item';
import Tree from '../Tree';
import { Typography } from '@material-ui/core';
import ItemExpanded from './ItemExpanded';

const Portfolio = () => {
  const [expandItem, setExpandItem] = useState(false);

  const togglePortfolioItem = () => {
    if (!expandItem) {
      setExpandItem(true);
    } else {
      setExpandItem(false);
    }
    console.log(expandItem);
  };

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
        <PortfolioItem />
        <PortfolioItem />
      </div>
      {expandItem && <ItemExpanded />}
    </>
  );
};

export default Portfolio;
