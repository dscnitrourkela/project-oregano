import React from 'react';
import { Link } from 'gatsby';
import navList from '../../../../../config/content';
import { MobileNavList, NavItem } from '../style';

export default () => (
  <MobileNavList>
    {navList.navItems.map((elem) => (
      <li
        key={elem.id}
        id={elem.name}
        role='menuitem'
        onClick={null}
        className='NavListItem'
        onKeyPress={null}
      >
        <Link style={{ textDecoration: 'none' }} to='/' tabIndex='0'>
          <NavItem>{elem.name}</NavItem>
        </Link>
      </li>
    ))}
  </MobileNavList>
);
