import React from 'react';
import { Container, Heading2, Heading3 } from '..';
import {FooterContainer, InitialCont, ImgCont, FirstRow, FrItems, FirstAboutContainer, SecondPendulumContainer} from './styles';
import {LastLine, Terms, ConditionItems, Credits} from './TermsNCredits';
import { AboutBox, Para, Content, LogoCont, LogoImg } from './AboutBox';
import {NitLogo, FooterImg} from './images'
import Pendulum from './Pendulum';

export const Footer = () => {
  return (
    <>
    <ImgCont src={FooterImg}/>
    <FooterContainer>
      
      <InitialCont>
        <FirstAboutContainer>
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
        </FirstAboutContainer>

        <SecondPendulumContainer>
          <Pendulum></Pendulum>
        </SecondPendulumContainer>
      </InitialCont>

      <LastLine>
        <Terms>
        <ConditionItems>Privacy & Cookies</ConditionItems>
        <ConditionItems>Terms and Conditions</ConditionItems>
        </Terms>

        <Credits>Architected with ❤️ by HackNITR Team</Credits>
      </LastLine>   
    </FooterContainer>
    </>
    
  )
}
