import React, { useContext } from 'react';
import { Link } from 'gatsby';

// Components
import { NavSection, StyledHamburger, Logo } from './styles';
import { MenuContext, Container, Body } from '../..';

// Assets
import { nav } from '../../../../config/content';

// Function Returning new scroll object
const newScrollObject = () => {
  // eslint-disable-next-line
  const SmoothScroll = require('smooth-scroll');
  return new SmoothScroll('', {
    offset: () => 100,
  });
};

const handleScroll = (id) => {
  if (typeof window !== 'undefined' && id) {
    const isHome = window.location.pathname === '/';
    if (isHome) {
      const scroll = newScrollObject();
      const anchor = document.getElementById(id);
      scroll.animateScroll(anchor);
    }
  }
};

function DesktopNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className='navWrapper'>
          <div className='navLeft'>
            <Link to='/'>
              <Logo src={nav.logo.src} alt={nav.logo.alt} />
            </Link>
          </div>

          <div className='navRight'>
            <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />

            <ul className='navLinkList'>
              {nav.navItems.map(({ id, name }) => (
                <li
                  key={id}
                  onClick={() => handleScroll(id)}
                  onKeyPress={() => handleScroll(id)}
                  id={name}
                  role='menuitem'
                  tabIndex='0'
                  className='navLinkItem'
                >
                  <Link style={{ textDecoration: 'none' }} to={`#${id}`}>
                    <Body className='navLink'>{name}</Body>
                  </Link>
                </li>
              ))}

              <Link
                href='https://frameboi.netlify.app/'
                style={{ textDecoration: 'none', marginRight: '5%' }}
              >
                <Body className='navLink'>Frame</Body>
              </Link>

              <Link to='/live' style={{ textDecoration: 'none' }}>
                <Body className='navLink'>Live</Body>
              </Link>
            </ul>
          </div>

          <div className='sponsor-sec' />
        </nav>
      </Container>
    </NavSection>
  );
}

export default DesktopNav;
