/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../shared';
import HeroContent from './HeroContent';
import Ticker from './Ticker';

const SectionContainer = styled.div`
  ${tw`
    h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    items-center
    justify-center
    relative
  `}
`;

const HeroContainer = styled.div`
  ${tw`
    items-center
    justify-center
    grid
    grid-cols-12
    mt-10
  `}
`;

const HeroImage = styled.img`
  ${tw`
    w-11/12
    block
  `}
`;

const HeroImageContainer = styled.div`
  ${tw`
    col-span-7
    sm:col-span-12
    flex
    justify-end
    sm:justify-center
  `}
`;

function HeroSection() {
  return (
    <SectionContainer>
      <Container>
        <HeroContainer>
          <HeroContent />
          <HeroImageContainer>
            <HeroImage
              src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hwt5qvsejm6kjka0aon1.png'
              alt='hero image'
            />
          </HeroImageContainer>
        </HeroContainer>
      </Container>
      <Ticker />
    </SectionContainer>
  );
}

export default HeroSection;
