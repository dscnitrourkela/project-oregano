import React from 'react';
import { Container, Heading2, Heading3 } from '..';
import {FooterContainer, InitialCont, ImgCont, FirstRow, FrItems, FirstAboutContainer, SecondPendulumContainer} from './styles';
import {NitLogo, FooterImg} from './images';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import PendulumGpt from './Pendulum_gpt';
import Pendulums from './Pendulums';

export const Footer = () => {
  return (
    <>
    <ImgCont src={FooterImg}/>
    <FooterContainer>
      
      <InitialCont>
        <AboutContainer AbtLogo={NitLogo}/>

        <SecondPendulumContainer>
          <PendulumGpt/>
        </SecondPendulumContainer>
      </InitialCont>

      <TermsNCredits/>
    </FooterContainer>
    </>
    
  )
}
