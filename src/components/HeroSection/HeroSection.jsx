import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Container } from '../shared';
import HeroContent from './HeroContent';
import Ticker from './Ticker';

// Assets
import { hero } from '../../../config/content';

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
  `}
`;

const HeroImage = styled.img`
  ${tw`
    w-11/12
    block
    md:hidden
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
    <SectionContainer id='home'>
      <Container>
        <HeroContainer>
          <HeroContent />
          <HeroImageContainer>
            <HeroImage src={hero.img.src} alt={hero.img.alt} />
          </HeroImageContainer>
        </HeroContainer>
      </Container>
      <Ticker />
    </SectionContainer>
  );
}

export default HeroSection;
