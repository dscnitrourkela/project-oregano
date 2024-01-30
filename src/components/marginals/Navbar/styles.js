import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import NavText from '../../shared/Typography/NavText';

/* Vanilla CSS properties */

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 64px;
  gap: 240px;
  border-radius: 12px;
  @media (max-width: 1024px) {
    padding: '6px 24px 6px 24px';
  }
  height: 80px;
  .open-nav {
    top: 80px;
    padding-top: 0px;
    @media (max-width: 1023px) {
      padding-top: 70px;
      height: 100vh;
      position: fixed;
    }
  }
  .closed-nav {
    top: -2080px;
    @media (max-width: 1023px) {
      height: 100vh;
    }
  }
`;
export const NavLink = styled.a`
  color: white;
  transition-duration: 500ms;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  transition: 0.5s;
  display: flex;
  align-items: centre;
  gap: 41px;
  position: relative;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #486ffd;
    box-shadow: 0px 0px 6px rgb(72, 111, 253);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 70%;
    left: 15%;
  }
`;

export const StyledHamburger = styled.button`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    background: #fff;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    transition: all 0.7s;
  }
  &:active,
  &:focus {
    outline-color: #fff;
  }
  &::before {
    top: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(40deg)' : null)};
  }
  &::after {
    width: ${({ menuOpen }) => (menuOpen ? '100%' : '80%')};
    bottom: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-40deg)' : null)};
  }
  @media all and (min-width: 1023px) {
    display: none;
  }
`;

/* Tailwind CSS */

export const Nav = styled.nav`
  ${tw`
    flex
    p-2
    w-full
    md:p-8
    md:gap-28
    z-[100]
`}
`;

export const LogoContainer = styled.div`
  ${tw`
    cursor-pointer
    flex
    items-center
    rounded-full
    bg-[#232323]
    w-[47.481px]
    h-[47.663px]
    flex-shrink-0
`}
`;

export const NavLinks = styled.ul`
  ${tw`
    flex
    flex-col
    lg:flex-row
    items-center
    justify-start
    lg:pb-0
    absolute
    lg:static
    lg:z-auto
    z-[-1]
    left-0
    w-full
    lg:w-auto
    lg:pl-0
    transition-all
    duration-[450ms]
    ease-in
`}
`;

export const NavHeaders = styled(NavText)`
  font-size: 16px;
  line-height: 24px;
`;

export const NavLinksContainer = styled.li`
  ${tw`
    list-none
    lg:ml-[8px]
    ml-0
    py-[16px]
    px-[32px]
    mb-[18px]
    lg:mb-[0]
    flex
`}
`;

// Define keyframes animation
const spin = keyframes`
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
`;

// export const CustomCardContainer = styled.div`
//   min-height: 100vh;
//   background: #212534;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding-top: 2rem;
//   padding-bottom: 2rem;
//   box-sizing: border-box;
// `;

export const CustomLogo = styled.div`
  background: #191c29;
  width: auto;
  height: auto;
  position: relative;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88, 199, 250, 0%);
  cursor: pointer;
  font-family: cursive;

  &::before {
    content: '';
    width: 110%;
    height: 110%;
    border-radius: 50%;
    background-image: linear-gradient(
      var(--rotate),
      #b067ff 24.48%,
      #02daff 50.52%,
      #14f195 75.52%,
      #fecf29
    );
    position: absolute;
    z-index: -1;
    top: -50;
    left: -50;
    animation: ${spin} 7s linear infinite;
  }

  &::after {
    display: none;
  }
`;

export const CustomLink = styled.a`
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
`;
