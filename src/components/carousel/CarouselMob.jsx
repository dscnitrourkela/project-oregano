import React from 'react';
import { useState } from 'react';
import * as styles from '../../styles/Carousel.module.css';
import { Body2, Heading1, Heading2 } from '../shared';
import Card from './Card';

export default function CarouselMob() {
  let cards1 = [
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
  const [right, setRight] = useState(0);
  function scrolled(e) {
    let cardwidth = 283;
    let scrollpush = (e.target.scrollLeft * 240) / (cardwidth * cards1.length);
    setRight(scrollpush);
  }
  // function mouseDown(e){
  //   setStartX(e.pageX - )
  // }
  const [focused, setFocused] = useState(2);
  return (
    <div>
      <div className='px-10'>
        <Heading2>SESSIONS</Heading2>
        <div className='pt-4 '>
        <Body2>New to hackathon dont worry we got you covered with all the basic information</Body2>
        </div>
      </div>
      
      <div
        className={`flex flex-wrap flex-col overflow-x-scroll pt-10 card-holder ${styles.dragScroll}`}
        style={{ height: '375px' }}
        onScroll={scrolled}
      >
        {cards1.map((item) => (
          <Card
            id={item.id}
            designation={item.designation}
            name={item.name}
            key={item.id}
            focused={item.id === focused}
            heading={item.heading}
            date={item.date}
            label={item.label}
          ></Card>
        ))}
      </div>
      <div
        style={{ height: '12px', width: '240px' }}
        className='bg-gray-300 rounded-full mx-auto my-36'
      >
        <div
          style={{ height: '12px', width: `${240 / cards1.length}px`, right: `-${right}px` }}
          className='bg-yellow-400 relative rounded-full'
        ></div>
      </div>
    </div>
  );
}
