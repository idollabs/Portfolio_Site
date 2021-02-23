import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { projects } from '../../data/projects';
import webImage from '../../images/new-england-mermaid-screenshot-720.png';
import responsiveImage from '../../images/NewEnglandMermaidIPhone.jpg';
import blogImage from '../../images/NewEnglandMermaidBlogPost.jpg';
import find from 'lodash/find';

export const PortfolioCarousel = ({ id }) => {
  const { carouselImages = [] } = find(projects, { id: id });
  console.log('carousel', carouselImages);
  var items = [
    {
      name: 'Random Name #1',
      image: webImage,
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      image: responsiveImage,

      description: 'Hello World!',
    },
    {
      name: 'Random Name #2',
      image: blogImage,

      description: 'Hello World!',
    },
  ];

  return (
    <Carousel animation='slide'>
      {carouselImages.map(({ imgId, image }) => (
        <Item key={imgId} item={image} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Paper>
      <img src={props.item.image} alt='' className='carouselImg' />
    </Paper>
  );
};
