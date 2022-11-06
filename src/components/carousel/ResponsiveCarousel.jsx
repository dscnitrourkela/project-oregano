import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from './Carousel';
import CarouselMob from './CarouselMob';
import { SectionContainer } from '../shared';

export default function ResponsiveCarousel() {
  let cards = [
    {
      id: 1,
      heading: 'HOW TO PRESENT IN A HACKATHON',
      name: 'Sivraj Rajshiv',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
    {
      id: 2,
      heading: 'HOW TO PRESENT IN A EVENT',
      name: 'Ayush Shaw',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
    {
      id: 3,
      heading: 'Random text3',
      name: 'Sivraj Rajshiv',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
    {
      id: 4,
      heading: 'Random text4',
      name: 'Sivraj Rajshiv',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
  ];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });
  if (screenWidth >= 640) {
    return (
      <SectionContainer children={<Carousel cards={cards} focused={2} />}>
        
      </SectionContainer>
    );
  } else {
    return (
      <SectionContainer children={<CarouselMob cards={cards} focused={2} />}>
        
      </SectionContainer>
    );
  }
}
