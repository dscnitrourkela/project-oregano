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
  width: ${(props) => 240 / props.cardlength}px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar: {width: 12px;};
`;

const ScrollArea = styled.div`
  ${tw`bg-gray-300 rounded-full mx-auto my-36`}
  height: 8px;
  width: 240px;
`;
const ScrollBar = styled.div`
  ${tw`bg-yellow-400 relative rounded-full`}
  height: 8px;
  width: ${props=>(240/(props.cardlength))}px;
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

      {/* <div
        className={`flex flex-wrap flex-col overflow-x-scroll pt-10 ${styles.dragScroll}`}
        style={{ height: '375px' }}
        onScroll={scrolled}
      > */}
      <DragScroll onScroll={scrolled}>
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
        </DragScroll>
      {/* </div> */}
      <ScrollArea>
        <ScrollBar style={{ right: `-${right}px` }} cardlength={cards.length}></ScrollBar>
      </ScrollArea>
    </div>
  );
}
