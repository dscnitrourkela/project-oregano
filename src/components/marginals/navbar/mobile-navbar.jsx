import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { MobileNavbar, MobileNavbarWrapper, NavbarLink } from './styles';

function MobileNav({ isOpen, navLinks }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <MobileNavbar
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <MobileNavbarWrapper initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -20 }}>
            {navLinks.map((link) => (
              <NavbarLink key={link.text} href={link.href}>
                {link.text}
              </NavbarLink>
            ))}
          </MobileNavbarWrapper>
        </MobileNavbar>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
