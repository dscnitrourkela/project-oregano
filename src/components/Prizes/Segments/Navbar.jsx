import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

const PrizeNavContainer = styled.div`
  min-width: 640px;
  width: 100%;
  height: 50px;
  background: transparent;
  margin-bottom: 50px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid #e8e8e8;

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
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  text-align: left;
  vertical-align: middle;
  position: relative;

  ${tw`
    font-Inter
  `}

  &::after {
    content: '';
    height: ${({ isActive }) => (isActive ? '3px' : '0px')};
    position: absolute;
    bottom: -18px;
    left: 0px;
    background-color: #ffe81f;
    width: 100%;
  }
`;

const PrizeNavbar = ({ navItems, stage }) => (
  <PrizeNavContainer>
    {navItems.map(({ setStage, key }) => (
      <PrizeNavItem key={key} onClick={setStage} isActive={stage === key}>
        {key}
      </PrizeNavItem>
    ))}
  </PrizeNavContainer>
);

export default PrizeNavbar;
