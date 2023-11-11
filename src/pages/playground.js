import React, { useState } from 'react';
import NavBar  from '../components/marginals/Navbar/navbar';
import { MenuContext } from '../components/marginals/Navbar/Menuontext';

export default function Playground() {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  return (
    <>
    <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
      <NavBar />
    </MenuContext.Provider>
  </>
  );
}