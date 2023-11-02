import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading4, NavText, Body1, Body2 } from '..';

export const FooterContainer = styled(Body1)`
  ${tw`
  text-white
  p-4
`}
  background: #060616;
`;

export const FirstRow = styled.div`
  ${tw`
  w-full
  flex
  flex-row
  items-start
  p-2
  `}
`;

export const FrItems = styled.span`
  ${tw`
  text-white
  text-xl
  px-4
  py-6
`}
`;


export const ImgCont = styled.img`
  ${tw`
  w-full
`}
`;

export const LastLine = styled.div`
  ${tw`
    h-[10px]
    bg-white
    w-full
    flex
    flex-row
    items-start
  `}
`;


export const Comp2 = styled(Container)`
background-color: red;
  ${tw`
   text-white
   border-4
   border-white
`}
`;
