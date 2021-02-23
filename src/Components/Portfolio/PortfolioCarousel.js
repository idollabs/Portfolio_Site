import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { projects } from '../../data/projects';
import webImage from '../../images/new-england-mermaid-screenshot-720.png';
import responsiveImage from '../../images/NewEnglandMermaidIPhone.jpg';
import blogImage from '../../images/NewEnglandMermaidBlogPost.jpg';

export const PortfolioCarousel = (props) => {
  const { carouselImages } = projects;
  //   const { imgId, image } = carouselImages;

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
      {items.map((item, i) => (
        <Item key={i} item={item} />
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
