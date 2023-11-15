import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavBar from '../marginals/Navbar/navbar';
import { MenuContext } from '../marginals/Navbar/MenuContext';

const LayoutContainer = styled.div`
  ${tw`
    relative
    w-full
  `}

  overflow-x: hidden;
`;
const Nav = styled.div`
  ${tw`
    absolute
    top-0
    w-full
  `}
`;

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  return (
    <LayoutContainer>
      <Nav>
        <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
          <NavBar />
        </MenuContext.Provider>
      </Nav>
      {children}
    </LayoutContainer>
  );
}
