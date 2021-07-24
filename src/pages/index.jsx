import React, { useState } from 'react';
import { HeroSection, FAQ, Container, Tracks, Sponsors, BeAHacker, DesktopNav, MobileNav, MenuContext } from '../components';

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  
  return (
    <div>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <DesktopNav />
        {menuOpen && <MobileNav />}
      </MenuContext.Provider>
         
      <HeroSection />
      <Container>
        <Tracks />
        <Sponsors />
        <FAQ />
        <BeAHacker />
      </Container>
    </div>
  );
}

export default Homepage;
