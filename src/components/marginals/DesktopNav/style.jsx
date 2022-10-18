import styled from 'styled-components';

export const NavBar = styled.header`
  background-color: black;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    padding: 0;
  }

  .navList {
    list-style: none;
    display: flex;
    margin: 0 auto;
    gap: 2em;
    padding: 0;
  }

  .navLink:hover {
    color: #fff;
  }

  @media (max-width: 865px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;
