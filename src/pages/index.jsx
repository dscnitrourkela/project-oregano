import React, { useState } from 'react';
import { DesktopNav, MobileNav, MenuContext, Heading1 } from '../components';

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
      <DesktopNav />
      {menuOpen ? <MobileNav /> : <Heading1>Website Body</Heading1>}
    </MenuContext.Provider>
  );
};

export default Homepage;
