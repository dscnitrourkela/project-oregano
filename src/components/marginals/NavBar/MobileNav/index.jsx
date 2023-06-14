import React, { useState } from 'react';
import navList from '../../../../../config/navigation';
import { MenuButton, NavBar, Logo } from './style';
import { Container } from '../../../shared';
import MobileNavList from './MobileNavList/MobileNavList';

// Function Returning new scroll object
const newScrollObject = () => {
  // eslint-disable-next-line
  const SmoothScroll = require('smooth-scroll');
  return new SmoothScroll('', {
    offset: () => 690,
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
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));

  const handleMenuClick = (id) => {
    toggleMenuIsOpen();
    handleScroll(id);
  };

  return (
    <NavBar menuIsOpen={menuIsOpen}>
      <Container>
        <nav className='mobileNavWrapper'>
          <div className='btn__container'>
            <MenuButton onClick={toggleMenuIsOpen} menuIsOpen={menuIsOpen}>
              <span className='menu_burger' />
            </MenuButton>
          </div>

          <Logo src={navList.logo.src} alt={navList.logo.alt} />

          {/* <MLHbanner /> */}
        </nav>
      </Container>

      {menuIsOpen && <MobileNavList handleMenuClick={handleMenuClick} />}
    </NavBar>
  );
}

export default MobileNav;
