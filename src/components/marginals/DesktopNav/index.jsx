import React from 'react';
import { Link } from 'gatsby';
import navList from '../../content/content';
import { NavBar, Logo, NavItem } from './style';
import MLHbanner from '../../atoms/MLHbanner';

function DesktopNav() {
  return (
    <NavBar>
        <div className='navWrapper'>

          <div className='nav-left'>
            <Logo src={navList.logo.src} alt={navList.logo.alt} />
          </div>

          <nav>
            <ul className='navList'>
              {navList.navItems.map((elem) => (
                <li
                  key={elem.id}
                  id={elem.name}
                  role='menuitem'
                  onClick={null}
                  onKeyPress={null}
                  className='NavListItem'
                >
                  <Link style={{ textDecoration: 'none' }} to='/' tabIndex='0'>
                    <NavItem>{elem.name}</NavItem>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className ='nav-right'>
            <MLHbanner />
          </div>

        </div>
    </NavBar>
  );
}

export default DesktopNav;
