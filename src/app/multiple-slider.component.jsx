import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";


function MultipleItems({ slides, show, scroll }) {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width >= 768 ? show : 1,
    slidesToScroll: width >= 768 ? scroll : 1,
  };
  

  return (
    <div className="slider-container">
      <Slider {...settings} className="flex gap-5">
        {slides.map((slide, slideIndex) => {
          return (
          <div className="h-[450px]"><img className="h-full w-full object-cover" key={slideIndex} src={slide} alt="" /></div>)
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;
