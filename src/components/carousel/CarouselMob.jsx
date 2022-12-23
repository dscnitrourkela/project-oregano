import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body2, Heading2 } from '../shared';
import Card from './Card';

const CarauselHead = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
  `}
`;

const DragScroll = styled.div`
  ${tw`flex flex-wrap flex-col overflow-x-scroll pt-6 gap-6`}
  height: 375px;
  /* width: ${(props) => 64 / props.cardlength}px; */
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollArea = styled.div`
  ${tw`bg-btn-yellow/[0.4] rounded-full mx-auto my-3`}
  height: 4px;
  width: 64px;
`;
const ScrollBar = styled.div`
  ${tw`bg-btn-yellow relative rounded-full`}
  height: 4px;
  width: ${(props) => 64 / props.cardlength}px;
`;
export default function CarouselMob({ cards, focused }) {
  const [right, setRight] = useState(0);
  function scrolled(e) {
    const cardwidth = 283;
    const scrollpush = (e.target.scrollLeft * 64) / (cardwidth * cards.length);
    setRight(scrollpush);
  }
  return (
    <>
      <CarauselHead>
        <Heading2>SESSIONS</Heading2>
        <Body2>New to hackathon dont worry we got you covered with all the basic information</Body2>
      </CarauselHead>

      <DragScroll onScroll={(e) => scrolled(e)}>
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
            img={item.img}
          />
        ))}
      </DragScroll>
      {/* </div> */}
      <ScrollArea>
        <ScrollBar style={{ right: `-${right}px` }} cardlength={cards.length} />
      </ScrollArea>
    </>
  );
}
