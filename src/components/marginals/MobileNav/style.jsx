import styled from 'styled-components';

export const NavBar = styled.header`
  background-color: black;
  position: relative;
  z-index: 1;
  display: none;
  flex-direction: column;

  .mobileNavWrapper {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .mobileNavWrapper > img {
    margin: 0 auto;
  }

  .btn__container {
    position: absolute;
  }

  @media (max-width: 865px) {
    height: ${({ menuIsOpen }) => (menuIsOpen ? '100vh' : 'auto')};
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
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
    height: 3px;
    width: 2.5em;
    background-color: #fff;
    transition: transform 400ms ease-in-out, background-color 700ms linear;
  }

  .menu_burger::before,
  .menu_burger::after {
    content: '';
    position: absolute;
    left: 0;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex: 1;
  gap: 0.5em;

  .navLink:hover {
    color: #fff;
  }

  @media (min-width: 865px) {
    display: none;
  }
`;
