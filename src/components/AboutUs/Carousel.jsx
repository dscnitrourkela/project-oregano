import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import './App.css';
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs';

const cloudinaryUrls = [
    'https://res.cloudinary.com/dafdencvh/image/upload/v1695910990/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_hack1_v0w65x.png',
    'https://res.cloudinary.com/dafdencvh/image/upload/v1695910980/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_hack2_ndvw4p.png',
    'https://res.cloudinary.com/dafdencvh/image/upload/v1695910973/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_3_qpw8go.png',
    'https://res.cloudinary.com/dafdencvh/image/upload/v1695910990/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_hack1_v0w65x.png',
    'https://res.cloudinary.com/dafdencvh/image/upload/v1695910980/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_hack2_ndvw4p.png',
    'https://res.cloudinary.com/dafdencvh/image/upload/v1695910973/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_3_qpw8go.png',
    
  ];

function CustomPrevArrow({onClick}) {
  return (
    <div className="arrow custom-prev-arrow" onClick={onClick} >
      <BsArrowLeft/>
    </div>
  );
}

function CustomNextArrow({onClick}) {
  return (
    <div className="arrow custom-next-arrow" onClick={onClick}>
    <BsArrowRight/>
    </div>
  );
}

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />
        }
      }]
  };

  return (
    <div className="container">
      <div className="slider">
        <Slider {...settings}>
          {cloudinaryUrls.map((imgUrl, index) => (
            <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
              <img src={imgUrl} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
