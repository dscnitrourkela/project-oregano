import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.ul`
  ${tw`
  flex
  flex-row
  list-none
  justify-around
  `}
`;

const NavItem = styled.li`
  ${tw`
 text-lg
 text-heading-color-primary
 no-underline
 mr-7
 cursor-pointer
 hover:text-xl
 hover:text-white
`}
`;

function NavItems() {
  return (
    <Wrapper>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
    </Wrapper>
  );
}

export default NavItems;
