import React from 'react';
import { useState } from 'react';
import * as styles from '../../styles/Carousel.module.css';
import { Body1, Body2, Heading3, Heading2, Caption } from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import tw from 'twin.macro';

const Py4 = styled.div`
  ${tw`py-4`}
`;

const SecondCardBottom = styled.div`
  ${tw`flex justify-between pt-4`}
`;
const ButtonYellow = styled.button`
  ${tw`bg-yellow-400 py-4 px-6 text-sm rounded-full text-black`}
`;

const CarouselContainer = styled.div`
  ${tw`grid grid-cols-5 py-12 w-full`}
`;

const BottomLink = styled.div`
  ${tw` my-auto font-semibold text-yellow-400 text-sm underline cursor-pointer`}
`;

const AnimatedCarousel = styled.div`
  ${tw`w-full`}
  height: 549px;
  grid-column: span 5 / span 5;
  @media (min-width: 946px) {
    grid-column: span 3 / span 3;
  }
`;

const BaseCard = styled.div`
  ${tw`mx-auto relative`}
  width: 384px;
  height: 517px;
`;

const ChevronButtonLeft = styled.button`
  ${tw`z-50 absolute w-8 h-8  bg-yellow-500 p-2 rounded-full text-white`}
  left: -48.72px;
  top: 351px;
  background-color: #8a8759;
`;

const ChevronButtonRight = styled.button`
  ${tw`z-50 absolute w-8 h-8  bg-yellow-500 p-2 rounded-full text-white`}
  right: -49.02px;
  top: 351px;
  background-color: #8a8759;
`;
const FirstHalfCard = styled.div`
  ${tw`h-1/2 bg-white w-full`}
  border-radius: ${(props) => props.radius};
`;
const SecondHalfCard = styled.div`
  ${tw`h-1/2 text-white py-4 bg-gray-900 flex flex-col justify-between`}
`;

const CardBottom = styled.div`
  ${tw`flex justify-between`}
`;
const CardLabel = styled.div`
  ${tw` mt-auto`}
`;

const DownIndex = styled.div`
  ${tw`mx-auto justify-between py-4 flex`}
  width: ${(props) => props.cardcount}rem;
`;

const IndividualDownIndexSelected = styled.span`
  ${tw`h-2 w-2 rounded-full mx-auto bg-yellow-400`}
`;
const IndividualDownIndexUnselected = styled.span`
  ${tw`h-2 w-2 rounded-full mx-auto bg-gray-100`}
`;

const DataComponent = styled.div`
  ${tw`relative max-w-md   pr-3  flex flex-col justify-between`}
  grid-column: span 5/span 5;
  margin-right: auto;
  margin-left: auto;
  top: 22px;
  height: 517px;
  @media (min-width: 946px) {
    margin-right: auto;
    grid-column: span 2 / span 2;
    padding-right: 4rem;
  }
`;

export default function Carousel({ cards, focused }) {
  const leftCardClass = `${styles.wReq} absolute top-0 z-10 ${styles.one} duration-300 ease-linear p-3 bg-gray-900 rounded-2xl`;

  const centerCardClass = `${styles.wScaled} absolute top-0 z-30 duration-300 ease-linear rounded-3xl p-3 bg-gray-900 ${styles.two}`;

  const rightCardClass = `${styles.three} ${styles.wReq} z-10 absolute top-0 duration-300 ease-linear bg-gray-900 p-3 rounded-2xl`;

  const behindCardClass = `${styles.two} ${styles.wReq} absolute top-0 z-0 duration-300 ease-linear p-3`;

  const [cns, setCNS] = useState([leftCardClass, centerCardClass, rightCardClass, behindCardClass]);

  const [cardDex, setCardDex] = useState(
    cns.map((item) => {
      if (item === centerCardClass) {
        return true;
      } else {
        return false;
      }
    }),
  );

  const [center, setCenter] = useState(1);

  function rotateLeft() {
    setCNS([...cns.slice(1), cns[0]]);
    setCardDex([...cardDex.slice(1), cardDex[0]]);
    setCenter((center - 1 + cards.length) % cards.length);
  }
  function rotateRight() {
    setCNS([cns[cns.length - 1], ...cns.slice(0, cns.length - 1)]);
    setCardDex([cardDex[cardDex.length - 1], ...cardDex.slice(0, cardDex.length - 1)]);
    setCenter((center + 1) % cards.length);
  }

  return (
    <CarouselContainer>
      <AnimatedCarousel>
        <BaseCard>
          <ChevronButtonLeft onClick={rotateLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ChevronButtonLeft>
          <ChevronButtonRight onClick={rotateRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </ChevronButtonRight>

          {/* card  */}
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                className={`${item.id === focused ? styles.focused : ''} ${cns[item.id - 1]}`}
                style={
                  cns[item.id - 1] !== centerCardClass
                    ? { filter: 'blur(2px)' }
                    : { filter: 'blur(0px)' }
                }
              >
                <FirstHalfCard
                  radius={cns[item.id - 1] !== centerCardClass ? '1.0rem' : '0.8rem'}
                ></FirstHalfCard>
                <SecondHalfCard>
                  <div>
                    <Heading3>{item.heading}</Heading3>
                    <Py4>
                      <Body2>
                        {item.name} : {item.designation}
                      </Body2>
                    </Py4>
                  </div>
                  <CardBottom>
                    <Body1>{item.date}</Body1>
                    <CardLabel>
                      <Body2>{item.label}</Body2>
                    </CardLabel>
                  </CardBottom>
                </SecondHalfCard>
              </div>
            );
          })}
        </BaseCard>
        <div>
          <DownIndex cardcount={cardDex.length}>
            <div className='bg-yellow-400'></div>
            {cardDex.map((item) => {
              if (item) return <IndividualDownIndexSelected></IndividualDownIndexSelected>;
              else return <IndividualDownIndexUnselected></IndividualDownIndexUnselected>;
            })}
          </DownIndex>
        </div>
      </AnimatedCarousel>
      <DataComponent>
        <Heading2>SESSIONS</Heading2>
        <Caption>
          Now to hackathon dont worry we got you covered with all the basic information
        </Caption>
        <Heading3>{cards[center].heading}</Heading3>

        <Body2>{cards[center].name}</Body2>

        <Body2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nulla nisi facere itaque ad
          doloribus, maxime dignissimos, minus accusamus, distinctio ratione consequatur harum rerum
          exercitationem beatae excepturi libero aut totam quam amet labore iure architecto.
        </Body2>

        <SecondCardBottom>
          <ButtonYellow>JOIN LIVE</ButtonYellow>
          <BottomLink>GO TO YOUTUBE {'>'}</BottomLink>
        </SecondCardBottom>
      </DataComponent>
    </CarouselContainer>
  );
}
