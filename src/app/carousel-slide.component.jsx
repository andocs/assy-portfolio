import React from 'react';

const CarouselSlide = ({ image, altText }) => {
  return (
    <div className="carousel-slide">
      <img src={image} alt={altText} />
    </div>
  );
};

export default CarouselSlide;