import React from 'react';
import MentorBox from './Cards';
import Mentors from './Data';


import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 15px;
  margin:  0px;
  height: 400px;
  border-color: #4b5563;
  background-color: black;
  width: 100%;
  @media (max-width: 768px) {
    height: 300px;
    width: 92.5%;
  }
`;

const slideAnimation = keyframes`
0% {
  transform: translate(20vw, 0);
}
100% {
  transform: translate(-40%, 0);
}
`;

export const CarouselTrack = styled.div`
  position: absolute;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 200%;
  height: 100%;
  animation: ${slideAnimation} 30s linear 0s infinite;
  animation-delay: -5s;
  &:hover {
    animation-play-state: paused;
    transform: scale(0.5);
    transition: all 0.5s ease; 
  }
  @media (max-width: 720px) {
    animation: ${slideAnimation} 20s linear 0s infinite;
    width: 700%;
  }
`;

 const MentorCarousel = () => {
  return (
    <>
    <CarouselContainer>
      <CarouselTrack>
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox
            key={detailKey}
            imgUrl={Mentors[detailKey].imgUrl}
          />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox
            key={detailKey}
            imgUrl={Mentors[detailKey].imgUrl}
          
          />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox
            key={detailKey}
            imgUrl={Mentors[detailKey].imgUrl}
          />
        ))}
      </CarouselTrack>
    </CarouselContainer>
    </>
  );
}

export default MentorCarousel;