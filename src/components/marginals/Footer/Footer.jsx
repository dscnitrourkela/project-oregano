import React from 'react';
import footer from '../../../../config/content/Footer';
import { FooterContainer, InitialCont, ImgCont, SecondPendulumContainer } from './styles';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import Cradle from './Cradle';

export const Footer = () => {
  return (
    <FooterContainer>
      <InitialCont>
        <AboutContainer AbtLogo={footer.Nitr} about_content={footer.cards[0]} />
        <TermsNCredits copyw={footer.copyright} />
      </InitialCont>
      <SecondPendulumContainer>
        <Cradle socials={footer.socials} text={footer.icons} />
      </SecondPendulumContainer>
    </FooterContainer>
  );
};
