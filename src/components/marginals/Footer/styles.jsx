import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading4, NavText, Body1, Body2 } from '../..';

export const FooterContainer = styled(Body1)`
  ${tw`
  flex
  flex-row
  justify-between
  text-white
  p-4
  bg-[#060616]
`}
  @media (max-width: 800px) {
    ${tw`
    flex-col-reverse
    items-center
    justify-between
    `}
  }
`;

export const InitialCont = styled.div`
  ${tw`
  w-[70vw]
  flex
  flex-col
  justify-between		
  `}
  @media (max-width: 800px) {
    ${tw`
    w-full
    flex-row
    items-center
    justify-between
    `}
  }
`;

// Cradle Container
export const SecondPendulumContainer = styled.div`
  ${tw` 
  relative
  flex
  flex-col
  items-center
  justify-between
  w-[500px]
  text-white
  p-4
  `}
  @media (max-width: 800px) {
    ${tw`
    p-[0px]
    w-full
    h-[370px]
    `}
  }
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
  ${tw`
  flex
  flex-row 
  items-center
  justify-center 
  w-full 
  h-auto 
  p-4
  mx-4
  pt-[100px]
  text-[16px]
  `}
  @media (max-width: 800px) {
    ${tw`
    w-full
    h-[300px]
    pt-[0px]
    `}
  }
`;

export const Ball = styled.div`
  transform-origin: 50% -200px;
  ${tw`
  flex
  flex-row 
  items-center
  justify-center
  relative
  text-black
  top-[100px]
  float-left
  w-[40px]
  h-[40px]
  bg-white
  rounded-full
  `}
  &::before {
    content: '';
    ${tw`
    text-black
    bg-black
    block
    absolute
    h-[200px]
    w-[3px]
    top-[-200px]
    left-[19px]
    bg-[#575757]
    `}
  }

  @media (max-width: 800px) {
    ${tw`
    top-[80px]
    `}
  }

  &:hover {
    background: linear-gradient(
      -17.61deg,
      #ff3fc0 0%,
      #b067ff 25%,
      #02daff 50%,
      #14f195 75%,
      #fecf29 100%
    );
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

const ball1Mob = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(15deg);
    background: linear-gradient(
      -17.61deg,
      #ff3fc0 0%,
      #b067ff 25%,
      #02daff 50%,
      #14f195 75%,
      #fecf29 100%
    );
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

const ball5Mob = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-15deg);
    background: linear-gradient(
      -17.61deg,
      #ff3fc0 0%,
      #b067ff 25%,
      #02daff 50%,
      #14f195 75%,
      #fecf29 100%
    );
  }
`;

const ballColour = keyframes`
  0%, 50% {
    background: white;
  }
  100% {
    background: linear-gradient(
      -17.61deg,
      #ff3fc0 0%,
      #b067ff 25%,
      #02daff 50%,
      #14f195 75%,
      #fecf29 100%
    );
  }
`;

// Apply animations to specific elements
export const Ball1 = styled(Ball)`
  animation: ${ball1Animation} 1s infinite alternate;
  @media (max-width: 600px) {
    animation: ${ball1Mob} 1s ease-out infinite alternate, ${ballColour} 1s infinite alternate;
  }
`;

export const Ball5 = styled(Ball)`
  animation: ${ball5Animation} 1s ease-out 1s infinite alternate;
  @media (max-width: 600px) {
    animation: ${ball5Mob} 1s ease-out 1s infinite alternate,
      ${ballColour} 1s ease-out 1s infinite alternate;
  }
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
  bg-[#060616]
  `}
  @media (max-width: 800px) {
    ${tw`
    px-0
  `}
  }
`;

export const FirstRow = styled.div`
  ${tw`
  w-full
  flex
  flex-row
  justify-start	
  p-2
  `}
  @media (max-width: 800px) {
    ${tw`
    flex-col
    w-[50vw]
    mx-0
    `}
  }
  @media (max-width: 500px) {
    ${tw`
    flex-col
    w-[40vw]
    mx-0
    `}
  }
`;

export const FrItems = styled.span`
  ${tw`
  text-white
  text-xl
  px-4
  py-6
`}
  @media (max-width: 1000px) {
    ${tw`
    px-2
    py-6
    `}
  }
`;

export const AboutBox = styled.div`
  ${tw`
    flex
    flex-row
    text-lg
    w-[55vw]
    mx-4
    my-8
    p-5
    bg-[#080822]
    `}
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 600px) {
    ${tw`
    w-[80vw]
    m-auto
    `}
  }
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
  @media (max-width: 1000px) {
    display: none;
  }
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
    w-[60vw]
    flex
    flex-row
    justify-around	
    items-center
  `}
  @media (max-width: 1000px) {
    ${tw`
    h-auto
    flex-col-reverse
    items-baseline
    `}
  }
`;

export const Terms = styled.div`
  ${tw`
  flex
  flex-row
  justify-start	
  `}
  @media (max-width: 1000px) {
    ${tw`
    flex-col
    items-baseline
    `}
`;

export const ConditionItems = styled.span`
  ${tw`
  text-xl
  px-4
  py-6
`}
  @media (max-width: 800px) {
    ${tw`
    px-1
    py-4
    `}
`;

export const Credits = styled.div`
  ${tw`
  mx-2
  px-8
  `}
  @media (max-width: 1000px) {
    ${tw`
    m-[0px]
    px-2
    py-6
    `}
`;
