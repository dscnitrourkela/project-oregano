import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionContainer } from '../components';

const Container = styled.div`
  ${tw`
    md:mx-12
    font-roboto
  `}
`;

function playground() {
  return (
    <Container>
      <SectionContainer>
        <h1>Section Container</h1>
      </SectionContainer>
    </Container>
  );
}

export default playground;
