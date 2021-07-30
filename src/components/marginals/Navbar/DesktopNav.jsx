/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { Link } from 'gatsby';

// Components
import { NavSection, StyledHamburger, Logo } from './styles';
import { MenuContext, Container, Body } from '../..';

// Assets
import { nav } from '../../../../config/content';

function DesktopNav({ location }) {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  const scrollTo = (id) => {
    if (document) {
      const element = document.getElementById(id);

      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <li key={id} onClick={() => scrollTo(id)} id={name} className='navLinkItem'>
                  <Link style={{ textDecoration: 'none' }} to={`#${id}`}>
                    <Body className='navLink'>{name}</Body>
                  </Link>
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
