import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import NavItems from './NavItems';

const Container = styled.div`
  ${tw`
    bg-background-dark
    py-7
    flex
    justify-around
    text-white
  `}
`;

const Heading = styled.h1`
  ${tw`text-yellow-300 underline`}
`;

function Navbar() {
  return (
    <Container>
      <Heading>Brand</Heading>
      <NavItems />
      <h3>Sponsor</h3>
    </Container>
  );
}

export default Navbar;
