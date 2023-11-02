import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Heading3 } from '..';

const AboutContainer = ({AbtLogo})=>{
  return(
    <FirstAboutContainer>
    <FirstRow>
      <FrItems>About US</FrItems>
      <FrItems>Contact US</FrItems>
      <FrItems>Sponsor US</FrItems>
    </FirstRow>

    <AboutBox>
      <LogoCont> <LogoImg src={AbtLogo} alt="nit logo" /> </LogoCont>
      <Para>
        <Heading3>About NIT Rourkela</Heading3>
        <Content>
        With a strength of around 7000 students, NIT Rourkela is one of the most 
        coveted institutes for higher studies by future technocrats. With its lush green
        and humongous area, it indeed makes a pleasant campus impression.
        </Content>
        </Para>
    </AboutBox>
  </FirstAboutContainer>
  )
}

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
    ;
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

export default AboutContainer;