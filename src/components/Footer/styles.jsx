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

export const InitialCont = styled.div`
  ${tw`
  w-full
  flex
  flex-row
  justify-between		
  `}
`;

export const SecondPendulumContainer = styled.div`
  ${tw` 
  w-[30%]
  text-white
  p-4
  `}
  background: #080822;
`;

export const ImgCont = styled.img`
  ${tw`
  w-full
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
