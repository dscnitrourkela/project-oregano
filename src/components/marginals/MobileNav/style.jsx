import styled, {keyframes} from 'styled-components';
import {NavText} from '../../shared/index';

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavBar = styled.header`
  background-color: ${({menuIsOpen}) => menuIsOpen ? 'black' : 'rgba(0, 8, 17, 0.81)'};
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
  display: none;
  flex-direction: column;

  .mobileNavWrapper {
    display: flex;
    padding: 0;
  }

  .mobileNavWrapper > img {
    margin: 0 auto;
  }

  .btn__container {
    position: absolute;
    @media( min-width: 680px){
      top: 20px;
    }
  }

  @media (max-width: 890px) {
    height: ${({ menuIsOpen }) => (menuIsOpen ? '100vh' : 'auto')};
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 26px;
  width: auto;
  z-index: 4;

  @media (min-width: 680px) {
    height: 40px;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;

  .menu_burger {
    display: block;
    position: relative;
  }

  .menu_burger,
  .menu_burger::before,
  .menu_burger::after {
    height: 2px;
    width: 25px;
    background-color: #fff;
    transition: all 400ms ease-in-out;
  }

  .menu_burger::before,
  .menu_burger::after {
    content: '';
    position: absolute;
    width: 15px;
  }

  .menu_burger {
    transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  .menu_burger::before {
    bottom: ${({menuIsOpen}) => (menuIsOpen ? '250%': '8px')};
    left: 0;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? 'rotate(90deg) translate(0px, -275%)' : 'rotate(0deg)'};
  }

  .menu_burger::after {
    top: ${({menuIsOpen}) => (menuIsOpen ? '250%': '8px')};
    right: 0;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? 'rotate(90deg) translate(0px, 250%)' : 'rotate(0deg)'};
  }

  @media (min-width: 680px){
    .menu_burger,
    .menu_burger::before,
    .menu_burger::after {
      height: 3px;
      width: 2em;
    }

    .menu_burger {
      transform: ${({ menuIsOpen }) => (menuIsOpen ? 'translateX(33.5px)' : 'translateX(0)')};
      background-color: ${({ menuIsOpen }) => (menuIsOpen ? 'transparent' : '#fff')};
    }
  
    .menu_burger::before {
      bottom: 12px;
      transform: ${({ menuIsOpen }) =>
        menuIsOpen ? 'rotate(45deg) translate(-16.5px,33px)' : 'rotate(0deg)'};
    }
  
    .menu_burger::after {
      top: 12px;
      transform: ${({ menuIsOpen }) =>
        menuIsOpen ? 'rotate(-45deg) translate(-16.5px,-33px)' : 'rotate(0deg)'};
    }
`;

export const MobileNavList = styled.ul`
  display: flex;
  padding: 12px 34px;
  flex-direction: column;
  align-items: stretch;
  list-style: none;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  flex: 1;

  .NavListItem{
    padding: 16px;
    border-bottom: 0.4px solid rgba(163, 163, 163, 1);
    ;
  }

  *:last-child{
    border: none;
  }

  @media (min-width: 890px) {
    display: none;
  }
`;

export const NavItem = styled(NavText)`
  font-weight: 600;
  color: rgba(163, 163, 163, 1);

  &:hover{
    color: #fff;
  }
`;
