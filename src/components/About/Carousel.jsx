import React from 'react';
import {useState } from 'react';
import Slider from 'react-slick';
import './App.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img1.png';

const images = [img1, img2, img3,img4];
function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }]
  };
  return (
    <div className="container">
        <div className="slider">
      <Slider {...settings}>
          {
            images.map((imgUrl, index)=>(
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                <img src={imgUrl} alt="" />
              </div>
            ))
          }
      </Slider>
        </div>
    </div>
  );
}
export default Carousel;
