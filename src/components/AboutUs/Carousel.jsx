/* eslint-disable max-len */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import '../../styles/carouselstyles.css';
import { AboutUs } from '../../../config';

function CustomPrevArrow({ onClick }) {
  return (
    <div
      className='arrow custom-prev-arrow'
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
    >
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        />
      </Helmet>
      <span className='material-symbols-outlined'>arrow_back_ios_new</span>
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div
      className='arrow custom-next-arrow'
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
    >
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        />
      </Helmet>
      <span className='material-symbols-outlined'>arrow_forward_ios</span>
    </div>
  );
}

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1200,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
    ],
  };

  return (
    <div className='container'>
      <div className='slider'>
        <Slider
          centerMode={settings.centerMode}
          centerPadding={settings.centerPadding}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
          beforeChange={settings.beforeChange}
          responsive={settings.responsive}
        >
          {AboutUs.carouselImages.map((imgUrl, index) => (
            <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={imgUrl}>
              <img className='carousel-img' src={imgUrl} alt={`Alt ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
