import React from 'react';
import { Link } from 'gatsby';
import navList from '../../../content/content';
import Nav from '../../../Typography/Links';
import { MobileNavList } from '../style';

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
          <Nav className='navLink'>{elem.name}</Nav>
        </Link>
      </li>
    ))}
  </MobileNavList>
);
