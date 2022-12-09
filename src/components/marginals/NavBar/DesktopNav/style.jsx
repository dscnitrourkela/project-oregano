import styled, { keyframes } from 'styled-components';
import { NavText } from '../../../shared';

const fade = keyframes`
    0% {
        width: 0;
        opacity: 0;
        box-shadow: none;

    }
    100% {
        width: 16px;
        opacity: 1;
        box-shadow: 0 0 6px 2px rgb(237 236 81 / 70%);
    }
`;

export const NavBar = styled.header`
  background-color: rgba(0, 8, 17, 0.81);
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
    width: 6%;
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
    animation: ${fade} 1s both cubic-bezier(0.16, 1, 0.3, 1);
    position: absolute;
    bottom: -6px;
    border-top: 1px solid #fff;
    left: 50%;
  }

  &:active::before,
  &:hover::before,
  &:visited::after {
    content: '';
    height: 2px;
    animation: ${fade} 1s both cubic-bezier(0.16, 1, 0.3, 1);
    position: absolute;
    bottom: -6px;
    border-top: 1px solid #fff;
    right: 50%;
  }

  &:hover {
    color: #fff;
  }
`;

export const Logo = styled.img`
  height: 42px;
  width: auto;
`;
