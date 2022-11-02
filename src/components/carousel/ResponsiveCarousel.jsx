import React from 'react'
import Carousel from './Carousel';
import CarouselMob from './CarouselMob';

export default function ResponsiveCarousel() {
  if(window.innerWidth >640){
    return(
        <Carousel />
    )
  }else{
    return(
        <CarouselMob />
    )
  }
}
