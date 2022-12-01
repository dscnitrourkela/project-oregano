import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { DesktopNav, Footer, MobileNav } from '../marginals';

const Wrapper = styled.div`
  ${tw`
    w-full
    relative
  `}
`;

const NavBar = styled.div`
  ${tw`
    w-full
    sticky
    top-0
  `}
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <NavBar>
        <DesktopNav />
        <MobileNav />
      </NavBar>
      {children}
      <Footer />
    </Wrapper>
  );
}

export default Layout;
