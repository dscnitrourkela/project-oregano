import React, { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { HN_LOGO, NAVBAR_LINKS } from '@/config/content/marginals';

import MobileNav from './mobile-navbar';
import {
  DesktopNavbar,
  DesktopNavbarLinks,
  HNLogo,
  NavbarContainer,
  NavbarLink,
  NavbarWrapper,
  ToggleButton,
} from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <HNLogo src={HN_LOGO} alt='HN Logo' width={70} height={70} className='mt-5' />
        <DesktopNavbar>
          <DesktopNavbarLinks>
            {NAVBAR_LINKS.map((link) => (
              <NavbarLink key={link.text} href={link.href}>
                {link.text}
              </NavbarLink>
            ))}
          </DesktopNavbarLinks>
        </DesktopNavbar>

        <ToggleButton onClick={toggleMenu} className='mt-5'>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </ToggleButton>
      </NavbarWrapper>

      <MobileNav isOpen={isOpen} navLinks={NAVBAR_LINKS} />
    </NavbarContainer>
  );
};

export default Navbar;
