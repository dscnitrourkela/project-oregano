import React from 'react';

import { StyledMobileNav } from './nav.styles';
// eslint-disable-next-line import/no-useless-path-segments
import { Body } from '../../.';
import { NavItems } from './NavItems';

function MobileNav() {
  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {NavItems.map((navitem) => (
            <li key={navitem.toLowerCase()} id={navitem.toLowerCase()} className='listItem'>
              <Body className='link'>{navitem}</Body>
            </li>
          ))}
        </ul>
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;
