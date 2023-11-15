import React, { useContext } from 'react';
import navbar from '../../../../config/content/navbar';
import { MenuContext } from './MenuContext';

import {
  NavContainer,
  NavLink,
  NavLinks,
  NavLinksContainer,
  StyledHamburger,
  NavHeaders,
  CustomLogo,
} from './styles';

const NavBar = () => {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  const handleClick = () => {
    toggleMenuOpen(false);
  };

  return (
    <NavContainer>
      <CustomLogo>
        <img
          src='https://res.cloudinary.com/dhnkuonev/image/upload/v1699458313/hnlogo_ei64kd.png'
          alt='Your Alt Text'
          className='glow'
        />
      </CustomLogo>
      <NavLinks className={` ${menuOpen ? 'open-nav' : 'closed-nav'}`}>
        {navbar.Links.map((link) => (
          <NavLinksContainer key={link.name}>
            <NavLink href={link.link} onClick={handleClick}>
              <NavHeaders semibold>{link.name}</NavHeaders>
            </NavLink>
          </NavLinksContainer>
        ))}
      </NavLinks>
      <div>.</div>
      <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />
    </NavContainer>
  );
};

export default NavBar;
