import React from 'react';
import { Container, Heading2, Heading3 } from '..';
import footer from '../../../config/content/Footer';
import { FooterContainer, InitialCont, ImgCont, SecondPendulumContainer } from './styles';
import { NitLogo, FooterImg } from './images';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import PendulumGpt from './Pendulum_gpt';
import Pendulums from './Pendulums';

export const Footer = () => {
  return (
    <>
      <ImgCont src={FooterImg} />
      <FooterContainer>
        <InitialCont>
          <AboutContainer AbtLogo={NitLogo} about_content={footer.cards[0]} />

          <SecondPendulumContainer>
            <PendulumGpt />
          </SecondPendulumContainer>
        </InitialCont>

        <TermsNCredits />
      </FooterContainer>
    </>
  );
};

console.log(footer);
