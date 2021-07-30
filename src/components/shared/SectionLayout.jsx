import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1, Body } from '.';

const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-col
    items-start
    justify-center
    mt-40
  `}
`;

const Description = styled(Body)`
  ${tw`
    mt-2
    w-1/2
    sm:w-full
  `}
`;

function Section({ children, title, description }) {
  return (
    <SectionContainer>
      <Heading1>{title}</Heading1>
      <Description>{description}</Description>
      {children}
    </SectionContainer>
  );
}

export default Section;
