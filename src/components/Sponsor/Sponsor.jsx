import React from 'react';
import Sponsor from '../../../config/content/Sponsor';
import {
  SponsorHeader,
  AlphaHeader,
  SmallHeader,
  SponsorLogo,
  AlphaLogoContainer,
  AlphaContainer,
  AlphaSponsors,
  BetaLogoContainer,
  BetaContainer,
  BetaSponsors,
  BottomContainer,
  GammaLogoContainer,
  GammaContainer,
  GammaSponsors,
  DeltaLogoContainer,
  DeltaContainer,
  DeltaSponsors,
} from './styles';

function SponsorSection() {
  const alphaSponsors = Sponsor.alpha;
  const betaSponsors = Sponsor.beta;
  const gammaSponsors = Sponsor.gamma;
  const deltaSponsors = Sponsor.delta;

  return (
    <div>
      <SponsorHeader>Sponsors</SponsorHeader>
      <AlphaSponsors>
        <AlphaContainer>
          <AlphaHeader>Alpha Sponsors</AlphaHeader>
          <AlphaLogoContainer>
            {alphaSponsors.map(({ src, alt, link }) => (
              <SponsorLogo key={src}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <img src={src} alt={alt} />
                </a>
              </SponsorLogo>
            ))}
          </AlphaLogoContainer>
        </AlphaContainer>
      </AlphaSponsors>
      <BetaSponsors>
        <BetaContainer>
          <SmallHeader>Beta Sponsors</SmallHeader>
          <BetaLogoContainer>
            {betaSponsors.map(({ src, alt, link }) => (
              <SponsorLogo key={src}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <img src={src} alt={alt} />
                </a>
              </SponsorLogo>
            ))}
          </BetaLogoContainer>
        </BetaContainer>
      </BetaSponsors>
      <BottomContainer>
        <GammaSponsors>
          <GammaContainer>
            <SmallHeader>Gamma Sponsors</SmallHeader>
            <GammaLogoContainer>
              {gammaSponsors.map(({ src, alt, link }) => (
                <SponsorLogo key={src}>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    <img src={src} alt={alt} />
                  </a>
                </SponsorLogo>
              ))}
            </GammaLogoContainer>
          </GammaContainer>
        </GammaSponsors>
        <DeltaSponsors>
          <DeltaContainer>
            <SmallHeader>Delta Sponsors</SmallHeader>
            <DeltaLogoContainer>
              {deltaSponsors.map(({ src, alt, link }) => (
                <SponsorLogo key={src}>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    <img src={src} alt={alt} />
                  </a>
                </SponsorLogo>
              ))}
            </DeltaLogoContainer>
          </DeltaContainer>
        </DeltaSponsors>
      </BottomContainer>
    </div>
  );
}

export default SponsorSection;
