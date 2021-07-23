import React from 'react';

import { StyledMobileNav } from './nav.styles';
// eslint-disable-next-line import/no-useless-path-segments
import { Body } from '../../.';

function MobileNav() {
  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          <li className='listItem'>
            <Body className='link'>Home</Body>
          </li>
          <li className='listItem'>
            <Body className='link'>Tracks</Body>
          </li>
          <li className='listItem'>
            <Body className='link'>Prizes</Body>
          </li>
          <li className='listItem'>
            <Body className='link'>FAQ</Body>
          </li>
          <li className='listItem'>
            <Body className='link'>Sponsors</Body>
          </li>
          <li className='listItem'>
            <Body className='link'>Contact</Body>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;
