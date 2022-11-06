import React from 'react';
import { useState } from 'react';
import * as styles from '../../styles/Carousel.module.css';
import { Body2, Heading1, Heading2 } from '../shared';
import Card from './Card';
import styled from 'styled-components';
import tw from 'twin.macro';

const PX10 = styled.div`
  ${tw`px-10`}
`;
const Pt4 = styled.div`
  ${tw`pt-4`}
`;

const DragScroll = styled.div`
  ${tw`flex flex-wrap flex-col overflow-x-scroll pt-10 `}
  height: 375px;
`;

const ScrollArea = styled.div`
  ${tw`bg-gray-300 rounded-full mx-auto my-36`}
  height: 10px;
  width: 240px;
`;

export default function CarouselMob({ cards, focused }) {
  const [right, setRight] = useState(0);
  function scrolled(e) {
    let cardwidth = 283;
    let scrollpush = (e.target.scrollLeft * 240) / (cardwidth * cards.length);
    setRight(scrollpush);
  }
  return (
    <div>
      <PX10>
        <Heading2>SESSIONS</Heading2>
        <Pt4>
          <Body2>
            New to hackathon dont worry we got you covered with all the basic information
          </Body2>
        </Pt4>
      </PX10>

      <div
        className={`flex flex-wrap flex-col overflow-x-scroll pt-10 ${styles.dragScroll}`}
        style={{ height: '375px' }}
        onScroll={scrolled}
      >
        {cards.map((item) => (
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
      <ScrollArea>
        <div
          style={{ height: '10px', width: `${240 / cards.length}px`, right: `-${right}px` }}
          className='bg-yellow-400 relative rounded-full'
        ></div>
      </ScrollArea>
    </div>
  );
}
