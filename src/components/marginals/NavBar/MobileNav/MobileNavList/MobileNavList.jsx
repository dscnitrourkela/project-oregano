import React from 'react';
import { Link } from 'gatsby';
import navList from '../../../../../../config/navigation';
import { MobileNavList, NavItem } from '../style';

export default ({ handleMenuClick }) => (
  <MobileNavList>
    {navList.navItems.map((elem) => (
      <li
        key={elem.id}
        id={elem.name}
        role='menuitem'
        onClick={() => handleMenuClick(elem.id)}
        className='NavListItem'
        onKeyPress={() => handleMenuClick(elem.id)}
      >
        <Link style={{ textDecoration: 'none' }} to='/' tabIndex='0'>
          <NavItem>{elem.name}</NavItem>
        </Link>
      </li>
    ))}
  </MobileNavList>
);
