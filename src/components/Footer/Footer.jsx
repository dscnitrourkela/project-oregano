import React from 'react';
import { Container, Heading2, Heading3 } from '..';
import footer from '../../../config/content/Footer';
import { FooterContainer, InitialCont, ImgCont, SecondPendulumContainer } from './styles';
import { NitLogo, FooterImg } from './images';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import Cradle from './Cradle';

export const Footer = () => {
  return (
    <div>
      <ImgCont src={FooterImg} />
      <FooterContainer>
        <InitialCont>
          <AboutContainer AbtLogo={NitLogo} about_content={footer.cards[0]} />
          <SecondPendulumContainer>
            <Cradle socials={footer.socials} />
          </SecondPendulumContainer>
        </InitialCont>
        <TermsNCredits copyw={footer.copyright} />
      </FooterContainer>
    </div>
  );
};
