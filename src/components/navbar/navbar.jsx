import React from 'react';

import { NAV_DATA } from '@/config/content/marginals';

import { NavContainer, NavItem } from './styles';

export const NavBar = () => {
  return (
    <NavContainer>
      {NAV_DATA.map((item, index) => (
        <NavItem key={index}>
          <a href={item.path}>{item.text}</a>
        </NavItem>
      ))}
    </NavContainer>
  );
};
