import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { DesktopNav, MobileNav, MenuContext } from '../marginals';

const Layout = styled.div`
  ${tw`
    relative
    w-full
  `}
`;
const Nav = styled.div`
  ${tw`
    absolute
    top-0
    w-full
  `}
`;

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));

  return (
    <Layout>
      <Nav>
        <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
          <DesktopNav />
          {menuOpen && <MobileNav />}
        </MenuContext.Provider>
      </Nav>
      {children}
    </Layout>
  );
};
