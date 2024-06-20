import Slider from "react-slick";


function MultipleItems({ slides, show, scroll }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: scroll,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
    ]
  };  

  return (
    <div className="slider-container px-6 md:px-0">
      <Slider {...settings} className="flex gap-5">
        {slides.map((slide, slideIndex) => {
          return (
          <div key={slideIndex} className="lg:h-96">
            <img className="w-full h-full object-cover" src={slide} alt="" />
          </div>)
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;
