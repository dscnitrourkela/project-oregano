import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import DesktopNav from '../../marginals/DesktopNav';
import MobileNav from '../../marginals/MobileNav';

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
    </Wrapper>
  );
}

export default Layout;
