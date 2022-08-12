import React, { useContext } from 'react';

// Libraries
import { Link } from 'gatsby';

// Components
import { Body, MenuContext } from '../..';
import { StyledMobileNav } from './styles';

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

function MobileNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen } = menuContext;

  const onMenuClick = (id) => {
    handleScroll(id);
    toggleMenuOpen();
  };

  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {nav.navItems.map(({ id, name }) => (
            <li
              key={id}
              id={name}
              className='listItem'
              onClick={() => onMenuClick(id)}
              onKeyDown={() => onMenuClick(id)}
              role='menuitem'
              tabIndex='0'
            >
              <Link to={`#${id}`} style={{ textDecoration: 'none' }}>
                <Body className='link'>{name}</Body>
              </Link>
            </li>
          ))}

          <Link href='https://frameboi.hacknitr.com/' style={{ textDecoration: 'none' }}>
            <li className='listItem' role='menuitem' tabIndex='0'>
              <Body className='link'>Frame</Body>
            </li>
          </Link>
        </ul>
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;
