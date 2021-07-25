import React from 'react';

// Components
import { Body } from '../..';
import { StyledMobileNav } from './styles';

// Assets
import { nav } from '../../../../config/content';

function MobileNav() {
  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {nav.navItems.map(({ id, name }) => (
            <li key={id} id={name.toLowerCase()} className='listItem'>
              <Body className='link'>{name}</Body>
            </li>
          ))}
        </ul>
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;
