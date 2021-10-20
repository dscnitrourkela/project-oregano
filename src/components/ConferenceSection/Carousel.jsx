import React from 'react';

// libraries
import Slider from 'react-slick';
import styled from 'styled-components';

// css
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
import Card from './Card';

const OverlayContainer = styled.div`
  position: relative;
  height: 400px;

  padding: 0;
  margin: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, transparent 30%, #121217 70%);
  z-index: 100;
`;

const Carousel = ({ cards }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 2000,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <OverlayContainer>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {cards.map((card) => (
          <Card key={card.image} card={card} />
        ))}
      </Slider>
      <Overlay />
    </OverlayContainer>
  );
};

export default Carousel;
