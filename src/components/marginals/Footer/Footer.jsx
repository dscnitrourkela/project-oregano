import React from 'react';
import { footer } from '../../../../config';
import { FooterContainer, InitialCont, SecondPendulumContainer } from './styles';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import Cradle from './Cradle';

export const Footer = () => (
  <FooterContainer>
    <InitialCont>
      <AboutContainer
        AbtLogo={footer.Nitr}
        aboutContent={footer.cards[0]}
        abtLinks={footer.links}
      />
      <TermsNCredits copyw={footer.copyright} />
    </InitialCont>
    <SecondPendulumContainer>
      <Cradle socials={footer.socials} text={footer.icons} />
    </SecondPendulumContainer>
  </FooterContainer>
);
