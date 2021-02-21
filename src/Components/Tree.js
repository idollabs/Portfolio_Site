import React from 'react';

const Tree = () => {
  return (
    <>
      <section className='treeTopContainer'>
        <div className='emptyTreeItem treeTopLeft'></div>
        <div className='emptyTreeItem treeTopRight'></div>
      </section>
      <section className='treeTopContainer'>
        <div className='treeMidLine'></div>{' '}
      </section>
      {/* <section className='treeBottomContainer'>
        <div className='treeItemContainer'>
          <div className='treePortfolioItem treeTopLeft'></div>
          <div className='treePortfolioItem treeTopRight'></div>
        </div>
        <div className='treeItemContainer'>
          <div className='treePortfolioItem treeTopLeft'></div>
          <div className='treePortfolioItem treeTopRight'></div>
        </div>
        <div className='treeItemContainer'>
          <div className='treePortfolioItem treeTopLeft'></div>
          <div className='treePortfolioItem treeTopRight'></div>
        </div>
      </section> */}
    </>
  );
};

export default Tree;
