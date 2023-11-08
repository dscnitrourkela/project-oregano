import React from 'react';
import footer from '../../../../config/content/Footer';
import { FooterContainer, InitialCont, ImgCont, SecondPendulumContainer } from './styles';
import { NitLogo } from './images';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import Cradle from './Cradle';

export const Footer = () => {
  return (
    <FooterContainer>
      <InitialCont>
        <AboutContainer AbtLogo={NitLogo} about_content={footer.cards[0]} />
        <SecondPendulumContainer>
          <Cradle socials={footer.socials} text={footer.icons} />
        </SecondPendulumContainer>
      </InitialCont>
      <TermsNCredits copyw={footer.copyright} />
    </FooterContainer>
  );
};
