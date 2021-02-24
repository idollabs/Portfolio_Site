import React from 'react';
import Items from './Items';
import Tree from './Tree';
import ItemExpanded from './ItemExpanded';
import { useSiteState } from '../../State/context';

const Portfolio = () => {
  const { state } = useSiteState();

  return (
    <>
      <h2 className="heading">Portfolio</h2>
      <br />
      <Tree />
      <br />
      <br />
      <Items />
      {!!state.itemExpanded && <ItemExpanded />}
    </>
  );
};

export default Portfolio;
