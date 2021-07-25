import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { SectionContainer } from '../shared';
import Heading from '../shared/Typography/Heading2';
import Body from '../shared/Typography/Body';
import HackerCard from './HackerCard';

const HackerItems = styled.div`
  ${tw`
      py-5
      w-full
    `}
`;

const Description = styled.div`
  ${tw`
      py-1
    `}
`;

const BeAHacker = () => (
  <SectionContainer>
    <HackerItems>
      <Heading>How to be a hacker?</Heading>
      <Description>
        <Body>We have prepared a list of simple steps one needs to follow to become</Body>
        <Body>true hacker. The person who attains all these abilities will yield the power</Body>
        <Body>a to hack anything.</Body>
      </Description>
    </HackerItems>

    <HackerCard />
  </SectionContainer>
);

export default BeAHacker;
