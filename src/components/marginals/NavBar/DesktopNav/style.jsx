import styled, { keyframes } from 'styled-components';
import { NavText } from '../../../shared';

const fade = keyframes`
    0% {
        width: 0;
        opacity: 0;
        box-shadow: none;

    }
    100% {
        width: 36%;
        opacity: 1;
        box-shadow: 0 0 8px 4px rgb(237 236 81 / 70%);
    }
`;

export const NavBar = styled.header`
  background-color: var(--background-primary);
  backdrop-filter: blur(10px);
  position: relative;
  padding: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;

  .navWrapper {
    display: flex;
    border: 0.4px solid rgba(155, 155, 155, 0.4);
    border-width: 0.4px 0;
    justify-content: space-evenly;
    align-items: flex-start;
    top: 0;
    padding: 0;
  }

  .nav-right {
    width: 8%;
    height: 42px;
  }

  .navList {
    list-style: none;
    display: flex;
  }

  .NavListItem {
    padding: 12px 1.5em;
    border: 0.4px solid rgba(155, 155, 155, 0.4);
    border-width: 0 0.4px;
    cursor: pointer;
  }

  @media (max-width: 890px) {
    display: none;
  }
`;

export const NavItem = styled(NavText)`
  font-weight: 400;
  color: var(--text-color-tertiary);
  position: relative;

  &:active::after,
  &:hover::after,
  &:visited::after {
    content: '';
    height: 2px;
    background-color: #fff;
    border-radius: 10px;
    animation: ${fade} 1s both cubic-bezier(0.16, 1, 0.3, 1);
    position: absolute;
    bottom: -6px;
    left: 49%;
  }

  &:active::before,
  &:hover::before,
  &:visited::after {
    content: '';
    height: 2px;
    background-color: #fff;
    border-radius: 10px;
    animation: ${fade} 1s both cubic-bezier(0.16, 1, 0.3, 1);
    position: absolute;
    bottom: -6px;
    right: 49%;
  }

  &:hover {
    color: #fff;
  }
`;

export const Logo = styled.img`
  height: 42px;
  width: auto;
`;
