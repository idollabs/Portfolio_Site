import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { projects } from '../../data/projects';
import webImage from '../../images/new-england-mermaid-screenshot-720.png';
import responsiveImage from '../../images/NewEnglandMermaidIPhone.jpg';
import blogImage from '../../images/NewEnglandMermaidBlogPost.jpg';
import find from 'lodash/find';
import { ImageOutlined } from '@material-ui/icons';

export const PortfolioCarousel = ({ id }) => {
  const { carouselImages = [] } = find(projects, { id: id });
  console.log('carousel', carouselImages);

  return (
    <Carousel animation='slide'>
      {carouselImages.map(({ imgId, image }) => (
        <>
          <img key={imgId} src={image} alt='' className='carouselImg' />
        </>
      ))}
    </Carousel>
  );
};

// const Item = (props) => {
//   return (
//     <Paper>
//       <img src={image} alt='' className='carouselImg' />
//     </Paper>
//   );
// };
