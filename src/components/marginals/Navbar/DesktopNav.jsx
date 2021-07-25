import React, { useContext } from 'react';

// Components
import { NavSection, StyledHamburger, Logo } from './styles';
import { MenuContext, Container, Body } from '../..';

// Assets
import { nav } from '../../../../config/content';

function DesktopNav() {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className='navWrapper'>
          <div className='navLeft'>
            <Logo src={nav.logo.src} alt={nav.logo.alt} />
          </div>

          <div className='navRight'>
            <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />

            <ul className='navLinkList'>
              {nav.navItems.map(({ id, name }) => (
                <li key={id} id={name.toLowerCase()} className='navLinkItem'>
                  <Body className='navLink'>{name}</Body>
                </li>
              ))}
            </ul>
          </div>

          <div className='sponsor-sec'>
            <Logo src={nav.logo.src} alt={nav.logo.alt} />
          </div>
        </nav>
      </Container>
    </NavSection>
  );
}

export default DesktopNav;
