import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { SectionContainer } from '../shared';
import Heading from '../shared/Typography/Heading2';
import Body from '../shared/Typography/Body';
import HackerCard from './HackerCard';

// Assets
import { hacker } from '../../../config/content';

const HackerItems = styled.div`
  ${tw`
      py-5
      w-full
    `}
`;

const SmallBody = styled(Body)`
  ${tw`
    w-3/6
    mt-2
  `}
`;

const BeAHacker = () => (
  <SectionContainer>
    <HackerItems>
      <Heading>{hacker.title}</Heading>
      <SmallBody>{hacker.content}</SmallBody>
    </HackerItems>

    <HackerCard />
  </SectionContainer>
);

export default BeAHacker;
