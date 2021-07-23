import React, { useContext } from 'react';

import { NavSection, StyledHamburger, Logo } from './nav.styles';
// eslint-disable-next-line import/no-useless-path-segments
import { MenuContext, Container, Body } from '../../.';

function DesktopNav() {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className='navWrapper'>
          <div className='navLeft'>
            <Logo
              // eslint-disable-next-line max-len
              src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png'
              alt='Brand Logo'
            />
          </div>

          <div className='navRight'>
            <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />

            <ul className='navLinkList'>
              <li className='navLinkItem'>
                <Body className='navLink'>About</Body>
              </li>
              <li className='navLinkItem'>
                <Body className='navLink'>Tracks</Body>
              </li>
              <li className='navLinkItem'>
                <Body className='navLink'>Prizes</Body>
              </li>
              <li className='navLinkItem'>
                <Body className='navLink'>FAQ</Body>
              </li>
              <li className='navLinkItem'>
                <Body className='navLink'>Sposors</Body>
              </li>
              <li className='navLinkItem'>
                <Body className='navLink'>Contact</Body>
              </li>
            </ul>
          </div>

          <div className='sponsor-sec'>
            <Logo
              // eslint-disable-next-line max-len
              src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png'
              alt='Brand Logo'
            />
          </div>
        </nav>
      </Container>
    </NavSection>
  );
}

export default DesktopNav;
