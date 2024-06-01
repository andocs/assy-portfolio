import React, { useState } from 'react';

import CarouselSlide from './CarouselSlide';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <CarouselSlide
        image={slides[currentIndex]}
        altText={`Slide ${currentIndex + 1}`}
      />
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;