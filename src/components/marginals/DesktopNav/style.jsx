import styled from 'styled-components';

export const NavBar = styled.header`
  background-color: black;
  position: relative;
  padding: 2.5em 0;
  z-index: 1;
  display: flex;
  flex-direction: column;

  .navWrapper {
    display: flex;
    border: 0.4px solid #6B6B6B;
    border-width: 0.4px 0;
    justify-content: space-evenly;
    align-items: flex-start;
    top: 0;
    padding: 0;
  }

  .nav-right{
    width: 6%;
    height: 42px;
  }

  .navList {
    list-style: none;
    display: flex;
  }

  .NavListItem{
    padding: 12px 1.5em;
    border: 0.4px solid #6B6B6B;
    border-width: 0 0.4px;
  }

  .navLink:hover {
    color: #fff;
  }

  @media (max-width: 890px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 42px;
  width: auto;
`;
