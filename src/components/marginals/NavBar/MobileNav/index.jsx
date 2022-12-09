import React, { useState } from 'react';
import navList from '../../../../../config/navigation';
import { MenuButton, NavBar, Logo } from './style';
import { MLHbanner, Container } from '../../../shared';
import MobileNavList from './MobileNavList/MobileNavList';

function MobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));

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

          <MLHbanner />
        </nav>
      </Container>

      {menuIsOpen && <MobileNavList />}
    </NavBar>
  );
}

export default MobileNav;
