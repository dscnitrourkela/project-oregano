import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

export const NavbarContainer = styled.div`
  ${tw`sticky w-full top-0 z-50 max-w-6xl left-0 right-0 mx-auto`}
`;

export const NavbarWrapper = styled.div`
  ${tw`flex items-center justify-between`}
`;
export const HNLogo = styled(Image)`
  ${tw`cursor-pointer ml-5 md:ml-0`}
`;
export const DesktopNavbar = styled.div`
  ${tw`hidden md:block absolute left-1/2 transform -translate-x-1/2`}
`;
export const DesktopNavbarLinks = styled.div`
  ${tw`bg-[#F4E7D6] h-[5.5rem] flex items-center px-8 py-3`}
  border-radius: 0rem 0rem 0.75rem 0.75rem;
`;
export const NavbarLink = styled(Link)`
  ${tw`px-4 font-dmsans duration-200 font-bold`}
  color: #190C15;
  &:hover {
    background: linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ToggleButton = styled.button`
  ${tw`md:hidden text-[#1e0716] focus:outline-none rounded-lg p-2 mr-5 bg-[#F4E7D6] duration-200`}
`;

export const MobileNavbar = styled(motion.div)`
  ${tw`md:hidden overflow-hidden`}
`;
export const MobileNavbarWrapper = styled(motion.div)`
  ${tw`bg-[#F4E7D6] rounded-bl-2xl rounded-br-2xl mt-4 py-4 px-4 space-y-8 flex flex-col`}
`;
