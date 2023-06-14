import React from 'react';
import { Link } from 'gatsby';
import navList from '../../../../../config/navigation';
import { NavBar, Logo, NavItem } from './style';
// import { MLHbanner } from '../../../shared';

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
  return (
    <NavBar>
      <div className='navWrapper'>
        <div className='nav-left'>
          <Logo src={navList.logo.src} alt={navList.logo.alt} />
        </div>

        <nav>
          <ul className='navList'>
            {navList.navItems.map((elem) => (
              <li
                key={elem.id}
                id={elem.name}
                role='menuitem'
                onClick={elem.Link ? null : () => handleScroll(elem.id)}
                onKeyPress={elem.Link ? null : () => handleScroll(elem.id)}
                className='NavListItem'
              >
                <Link style={{ textDecoration: 'none' }} to={elem.Link || null} tabIndex='0'>
                  <NavItem>{elem.name}</NavItem>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='nav-right'>{/* <MLHbanner /> */}</div>
      </div>
    </NavBar>
  );
}

export default DesktopNav;
