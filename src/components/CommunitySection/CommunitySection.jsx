import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading2, Body1, Container } from '..';
import { community } from '../../../config';
import Carousel from './Carousel';

// assets

const ConfContainer = styled.div`
  ${tw`
      mt-40
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}
`;

const Description = styled(Body1)`
  ${tw`
    mt-4
    md:w-2/4
    text-center
    w-full
    text-color-tertiary
  `}
`;

const ConfSection = () => (
  <ConfContainer id='community'>
    <Container>
      <SectionContainer>
        <Heading2 semibold>{community.title}</Heading2>
        <Description>{community.content}</Description>
      </SectionContainer>
      <Carousel colors={community.colors} cards={community.cards} />
    </Container>
  </ConfContainer>
);

export default ConfSection;
