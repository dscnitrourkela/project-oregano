import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import NavText from '../../shared/Typography/NavText';

/* Vanilla CSS properties */

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 5rem;
  padding: 10px 1rem;
  border-radius: 12px;
  height: 90px;
  z-index: 100;
  background-color: ${(props) => (props.scrolled ? 'rgba(235,235,235,0.1)' : 'transparent')};
  backdrop-filter: ${(props) => (props.scrolled ? 'blur(10px)' : 'none')};
  transition: background-color 0.3s ease;
  .open-nav {
    top: 0px;
    padding-top: 0px;
    z-index: 1;
    background: transparent;
    @media (max-width: 1023px) {
      background: #0e0812;
      padding-top: 150px;
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
  @media (max-width: 992px) {
    margin: 0.5rem 2.5rem;
  }
  @media (max-width: 720px) {
    margin: 0.5rem 1rem;
    background-color: transparent;
  }
`;
export const NavLink = styled.a`
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  transition: 0.25s;
  display: flex;
  align-items: centre;
  gap: 41px;
  position: relative;
  scroll-behavior: smooth;
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
  background: transparent;
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  position: relative;
  border: none;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    background: white;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    transition: all 0.25s;
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
  @media all and (min-width: 1024px) {
    display: none;
  }
`;

/* Tailwind CSS */

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
    duration-[250ms]
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
    px-[24px]
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

export const CustomLogo = styled.div`
  background: #191c29;
  width: 68px;
  aspect-ratio: 1;
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
  z-index: 100;

  &::before {
    content: '';
    width: 105%;
    height: 105%;
    border-radius: 50%;
    background-image: linear-gradient(
      var(--rotate),
      #b067ff 24.48%,
      #02daff 50.52%,
      #14f195 75.52%,
      #fecf29
    );
    filter: blur(3px);
    position: absolute;
    z-index: -1;
    top: -50;
    left: -50;
    animation: ${spin} 7s linear infinite;
  }

  &::after {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 48px;
  }
`;

export const CustomLink = styled.a`
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
`;
