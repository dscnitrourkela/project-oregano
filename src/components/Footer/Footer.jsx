import React from 'react';
import { Container, Heading2, Heading3 } from '..';
import {Comp1, FooterContainer, ImgCont, FirstRow, FrItems,Comp2} from './styles';
import { AboutBox, Para, Content, LogoCont, LogoImg } from './AboutBox';
import FooterImg from '../../../public/Frame 791.png';
import NitLogo from '../../../public/nitr_logo.png';

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

        <Heading2> Footer </Heading2>
        <Comp1>list item 1</Comp1>
        <Comp1>list item 2</Comp1>
        <Comp1>Smaller Componenets</Comp1>

        <Comp2>another component</Comp2>
    </FooterContainer>
    </>
    
  )
}
console.log(Comp1.componentStyle.rules)
console.log(Comp2.componentStyle.rules)