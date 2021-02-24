import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { projects } from '../../data/projects';
import find from 'lodash/find';

const ItemCarousel = ({ id }) => {
  const { carouselImages = [] } = find(projects, { id: id });
  console.log('carousel', carouselImages);

  return (
    <Carousel animation="slide">
      {carouselImages.map(({ imgId, image }) => (
        <>
          <img key={imgId} src={image} alt="" className="carouselImg" />
        </>
      ))}
    </Carousel>
  );
};

export default ItemCarousel;
