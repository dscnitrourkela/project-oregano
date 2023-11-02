import React from 'react';
import { Container, Heading2, Heading3 } from '..';
import {FooterContainer, ImgCont, FirstRow, FrItems} from './styles';
import { AboutBox, Para, Content, LogoCont, LogoImg,  } from './AboutBox';
import {NitLogo, FooterImg} from './images'

export const Footer = () => {
  return (
    <>
    <ImgCont src={FooterImg} alt="footer" />

    <FooterContainer>

      <FirstRow>
        <FrItems>About US</FrItems>
        <FrItems>Contact US</FrItems>
        <FrItems>Sponsor US</FrItems>

      </FirstRow>

      <AboutBox>
        <LogoCont> <LogoImg src={NitLogo} alt="nit logo" /> </LogoCont>
        <Para>
          <Heading3>About NIT Rourkela</Heading3>
          <Content>
          With a strength of around 7000 students, NIT Rourkela is one of the most 
          coveted institutes for higher studies by future technocrats. With its lush green
          and humongous area, it indeed makes a pleasant campus impression.
          </Content>
        </Para>
      </AboutBox>

        
    </FooterContainer>
    </>
    
  )
}
