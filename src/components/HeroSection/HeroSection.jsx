import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionContainer } from '../shared';
import HeroContent from './HeroContent';
import Ticker from './Ticker';

const HeroSectionContainer = styled(SectionContainer)`
  ${tw`mt-14`}
`;
const HeroContainer = styled.div`
  ${tw`mx-9 justify-self-center grid grid-cols-12`}
`;
const HeroImage = styled.img`
  ${tw`
  max-w-full
  block`}
`;

const HeroImageContainer = styled.div`
  ${tw`col-span-8 sm:hidden flex items-center justify-center`}
`;

function HeroSection() {
  return (
    <HeroSectionContainer>
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
    </HeroSectionContainer>
  );
}

export default HeroSection;
