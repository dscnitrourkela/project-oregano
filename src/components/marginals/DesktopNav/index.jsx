import React from 'react';
import { Link } from 'gatsby';
import navList from '../../content/content';
import Container from '../../atoms/Container';
import { NavBar, Logo } from './style';
import Nav from '../../Typography/Links';
import MLHbanner from '../../atoms/MLHbanner';

function DesktopNav() {
  return (
    <NavBar>
      <Container>
        <nav className='navWrapper'>
          <Logo src={navList.logo.src} alt={navList.logo.alt} />

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
                  <Nav className='navLink'>{elem.name}</Nav>
                </Link>
              </li>
            ))}
          </ul>

          <MLHbanner />
        </nav>
      </Container>
    </NavBar>
  );
}

export default DesktopNav;
