import React from 'react';

// Libraries
import styled from 'styled-components';

const PrizeNavContainer = styled.div`
  width: 100%;
  height: 50px;
  background: transparent;
  margin-bottom: 50px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

const PrizeNavItem = styled.h4`
  margin: 0px;
  margin-right: 35px;
  /* height: 100%; */

  color: ${({ isActive }) => (isActive ? '#ffffff' : 'rgba(255,255,255, 0.4)')};
  transition: color 350ms ease 0s;

  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  vertical-align: middle;
`;

const PrizeNavbar = ({ navItems, stage }) => (
  <PrizeNavContainer>
    {navItems.map(({ setStage, title, key }) => (
      <PrizeNavItem key={key} onClick={setStage} isActive={stage === key}>
        {title}
      </PrizeNavItem>
    ))}
  </PrizeNavContainer>
);

export default PrizeNavbar;
