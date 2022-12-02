import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Body2, Heading3, Heading2, Caption, Heading4 } from '../shared';

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
  transition: all 0.1s linear;
  &:hover {
    ${tw`bg-btn-yellow text-black`}
  }
`;

const ChevronButtonRight = styled.button`
  ${tw`z-50 absolute w-8 h-8  bg-yellow-500 p-2 rounded-full text-white`}
  right: -49.02px;
  top: 351px;
  background-color: #8a8759;
  transition: all 0.1s linear;
  &:hover {
    ${tw`bg-btn-yellow text-black`}
  }
`;

const CardClass = styled.div`
  ${tw`absolute p-3 duration-300 ease-linear bg-gray-900`}
  border: ${(props) => (props.focused ? '4px solid yellow' : '0px')};
  border-radius: ${(props) => handleRound(props.pos)};

  width: ${(props) => (props.pos === 'center' ? '384px' : '351.32px')};
  height: ${(props) => (props.pos === 'center' ? '517px' : '473px')};
  top: ${(props) => (props.pos === 'center' ? '0px' : '22px')};
  left: ${(props) => handleLeft(props.pos)};
  filter: ${(props) => (props.pos === 'center' ? 'blur(0px)' : 'blur(3.65957px)')};
  z-index: ${(props) => handleZindex(props.pos)};
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
  ${tw`mx-auto justify-between py-6 flex`}
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

const DataHead = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
  `}
`;

const DataBody = styled(DataHead)`
  ${tw`
    gap-6
  `}
`;

function handleRound(pos) {
  if (pos === 'left' || pos === 'right') {
    return '1rem';
  }
  if (pos === 'center') {
    return '1.5rem';
  }
  return '0rem';
}
function handleLeft(pos) {
  if (pos === 'left') {
    return '-79.32px';
  }
  if (pos === 'right') {
    return '112px';
  }
  return '0px';
}
function handleZindex(pos) {
  if (pos === 'center') {
    return 30;
  }
  if (pos === 'back') {
    return 0;
  }
  return 10;
}

function setcard(cards) {
  let arr = [];
  if (cards.length === 0) {
    return arr;
  }
  if (cards.length === 1) {
    arr.push('left');
    return arr;
  }
  if (cards.length === 2) {
    arr.push('left');
    arr.push('center');
    return arr;
  }
  if (cards.length === 3) {
    arr = ['left', 'center', 'right'];
    return arr;
  }
  arr = ['left', 'center', 'right'];
  for (let i = cards.length - 3; i >= 1; i -= 1) {
    arr.push('back');
  }
  return arr;
}

export default function Carousel({ cards }) {
  const [cardpos, setcardpos] = useState(setcard(cards));
  const [focused, setFocused] = useState(1);
  const [cardindex, setcardindex] = useState(
    cardpos.map((item) => {
      if (item === 'center') {
        return true;
      }
      return false;
    }),
  );
  function rLeft() {
    setcardpos([...cardpos.slice(1), cardpos[0]]);
    setcardindex([...cardindex.slice(1), cardindex[0]]);
    setCenter((center - 1 + cards.length) % cards.length);
    setFocused(focused > 0 ? focused - 1 : cards.length - 1);
  }
  function rRight() {
    setcardpos([cardpos[cardpos.length - 1], ...cardpos.slice(0, cardpos.length - 1)]);
    setcardindex([cardindex[cardindex.length - 1], ...cardindex.slice(0, cardindex.length - 1)]);
    setCenter((center + 1) % cards.length);
    setFocused(focused < cards.length - 1 ? focused + 1 : 0);
  }
  const [center, setCenter] = useState(1);

  return (
    <CarouselContainer>
      <AnimatedCarousel>
        <BaseCard>
          <ChevronButtonLeft onClick={() => rLeft()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ChevronButtonLeft>
          <ChevronButtonRight onClick={() => rRight()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </ChevronButtonRight>

          {/* card  */}
          {cards.map((item) => (
            <CardClass pos={cardpos[item.id]} focused={item.id === focused} key={item.id}>
              <FirstHalfCard radius={cardpos[item.id - 1] !== 'center' ? '1.0rem' : '0.8rem'} />
              <SecondHalfCard>
                <div>
                  <Heading3 semibold>{item.heading}</Heading3>
                  <Py4>
                    <Body2>
                      <span className='font-semibold'>{item.name}</span> : {item.designation}
                    </Body2>
                  </Py4>
                </div>
                <CardBottom>
                  <Heading4>{item.date}</Heading4>
                  <CardLabel>
                    <Body2>{item.label}</Body2>
                  </CardLabel>
                </CardBottom>
              </SecondHalfCard>
            </CardClass>
          ))}
        </BaseCard>
        <div>
          <DownIndex cardcount={cardindex.length}>
            {cardindex.map((item, idx) => {
              if (item) return <IndividualDownIndexSelected key={idx} />;
              return <IndividualDownIndexUnselected key={idx} />;
            })}
          </DownIndex>
        </div>
      </AnimatedCarousel>
      <DataComponent>
        <DataHead>
          <Heading2 semibold>SESSIONS</Heading2>
          <Caption>
            Now to hackathon dont worry we got you covered with all the basic information
          </Caption>
        </DataHead>

        <DataBody>
          <Heading3>{cards[center].heading}</Heading3>
          <Body2>{cards[center].name}</Body2>
        </DataBody>

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
