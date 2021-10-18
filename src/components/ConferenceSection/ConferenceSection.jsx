import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, Container } from '..';
import Carousel from './Carousel';

// assets
import { conference } from '../../../config/content';

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

const Description = styled(Body)`
  ${tw`
    mt-4
    w-2/4
    text-center
    md:w-full
  `}
`;

const ConfSection = () => (
  <ConfContainer>
    <Container>
      <SectionContainer>
        <Heading1>{conference.title}</Heading1>
        <Description>{conference.content}</Description>
      </SectionContainer>
      <Carousel cards={conference.cards} />
    </Container>
  </ConfContainer>
);

export default ConfSection;
