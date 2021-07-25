import React, { useContext } from 'react';

import { NavSection, StyledHamburger, Logo } from './styles';
import { MenuContext, Container, Body } from '../..';
import { NavItems } from './navbarItems';

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
              {NavItems.map((navitem) => (
                <li key={navitem.toLowerCase()} id={navitem.toLowerCase()} className='navLinkItem'>
                  <Body className='navLink'>{navitem}</Body>
                </li>
              ))}
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
