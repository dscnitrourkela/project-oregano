import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionContainer } from '../shared';
import HeroContent from './HeroContent';
import Ticker from './Ticker';

const HeroContainer = styled.div`
  ${tw`flex items-center justify-center grid grid-cols-12`}
`;
const HeroImage = styled.img`
  ${tw`
  max-w-full
  block`}
`;

const HeroImageContainer = styled.div`
  ${tw`col-span-8 sm:hidden flex items-end`}
`;

function HeroSection() {
  return (
    <SectionContainer>
      <HeroContainer>
        <HeroContent />
        <HeroImageContainer>
          <HeroImage
            src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hwt5qvsejm6kjka0aon1.png'
            alt='hero image'
          />
        </HeroImageContainer>
      </HeroContainer>
      <Ticker />
    </SectionContainer>
  );
}

export default HeroSection;
