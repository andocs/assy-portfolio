import React from "react";
import Slider from "react-slick";

function MultipleItems({slides}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };


  return (
    <div className="slider-container">
      <Slider {...settings} className="flex gap-5">
        {slides.map((slide) => {
            return(
                <img src={slide} alt="" />)
        })}
        
      </Slider>
    </div>
  );
}

export default MultipleItems;
