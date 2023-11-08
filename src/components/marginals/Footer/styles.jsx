import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading4, NavText, Body1, Body2 } from '../..';

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

// Cradle Container
export const SecondPendulumContainer = styled.div`
  ${tw` 
  relative
  flex
  flex-col
  items-center
  justify-between
  w-[30%]
  text-white
  p-4
  `}
  background: #080822;
`;

export const SocialText = styled.div`
  ${tw`
  absolute
  bottom-12
  left-0.5
  text-neutral-white-700
  text-lg
  text-center	
  w-full
  `}
`;

export const SocialsCont = styled.div`
  ${tw`
  flex
  flex-col
  justify-between
  `}
`;
export const CradleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding-top: 100px;
`;

export const Ball = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  top: 100px;
  float: left;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  transform-origin: 50% -200px;
  &:before {
    content: '';
    color: black;
    background: black;
    display: block;
    position: absolute;
    height: 200px;
    width: 3px;
    top: -200px;
    left: 19px;
    background: #575757;
  }
`;

// Define keyframes
const ball1Animation = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
`;

const ball5Animation = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

// Apply animations to specific elements
export const Ball1 = styled(Ball)`
  animation: ${ball1Animation} 0.8s ease-out infinite alternate;
`;

export const Ball5 = styled(Ball)`
  animation: ${ball5Animation} 0.8s ease-out 0.8s infinite alternate;
`;

export const ImgCont = styled.img`
  ${tw`
  w-full
`}
`;

export const SocialLogo = styled.img`
  ${tw`
  w-[20px]
`}
`;

// About Container
export const FirstAboutContainer = styled.div`
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
  justify-start	
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

export const AboutBox = styled.div`
  ${tw`
    flex
    flex-row
    text-lg
    w-[851px]
    mx-4
    my-8
    p-5
    `}
  background: #080822;
`;

export const Para = styled.p`
  ${tw`
    flex
    flex-col
    mx-5
    
    `}
`;
export const Content = styled.p`
  ${tw`
    my-5
    text-neutral-white-700
    `}
`;

export const LogoCont = styled.span`
  ${tw`
  w-[250px]
`}
`;

export const LogoImg = styled.img`
  ${tw`
    w-full
    `}
`;

// Terms and Credits
export const LastLine = styled.div`
  ${tw`
  text-gray-500
    h-[50px]
    w-full
    flex
    flex-row
    justify-start	
    items-center
  `}
`;

export const Terms = styled.div`
  ${tw`
  flex
  flex-row
  justify-start	
  `}
`;

export const ConditionItems = styled.span`
  ${tw`
  text-xl
  px-4
  py-6
`}
`;

export const Credits = styled.div`
  ${tw`
  mx-2
  px-8
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
