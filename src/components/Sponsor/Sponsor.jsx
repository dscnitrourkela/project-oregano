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
  // DeltaLogoFirst,
  DeltaLogoSecond,
  DeltaContainer,
  DeltaSponsors,
  AlphaLogoImg,
  DeltaLogoImg,
  PlatformImage,
  SponsorTitle,
  SponsorLink,
  // DeltaLogoImg,
} from './styles';
import { SectionContainer } from '../shared';

function SponsorSection() {
  const alphaSponsors = Sponsor.alpha;
  const betaSponsors = Sponsor.beta;
  // const gammaSponsors = Sponsor.gamma;
  const deltaSponsorsFirst = Sponsor.deltaFirst;
  const deltaSponsorsSecond = Sponsor.deltaSecond;

  return (
    <SectionContainer>
      <SponsorHeader id='Sponsors'>Sponsors</SponsorHeader>
      <SponsorTitle>
        Today,we bring you the opportunity to collaborate with us on our next endeavour.&nbsp;
        <SponsorLink href='https://tally.so/r/3jl2za'>Sponsor Us</SponsorLink>
      </SponsorTitle>
      <AlphaSponsors>
        <AlphaContainer>
          <AlphaHeader>Title Sponsor</AlphaHeader>
          <AlphaLogoContainer>
            {alphaSponsors.map(({ src, alt, link }) => (
              <SponsorLogo key={src}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <AlphaLogoImg src={src} alt={alt} />
                </a>
              </SponsorLogo>
            ))}
          </AlphaLogoContainer>
        </AlphaContainer>
      </AlphaSponsors>
      <BetaSponsors>
        <BetaContainer>
          <SmallHeader>Platform Sponsors</SmallHeader>
          <BetaLogoContainer>
            {betaSponsors.map(({ src, alt, link }) => (
              <SponsorLogo key={src}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <PlatformImage src={src} alt={alt} />
                </a>
              </SponsorLogo>
            ))}
          </BetaLogoContainer>
        </BetaContainer>
      </BetaSponsors>
      {/* <BetaSponsors>
        <BetaContainer>
          <SmallHeader>Delta Sponsor</SmallHeader>
          <BetaLogoContainer>
            {deltaSponsorsFirst.map(({ src, alt, link }) => (
              <SponsorLogo key={src}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <DeltaLogoImg src={src} alt={alt} />
                </a>
              </SponsorLogo>
            ))}
          </BetaLogoContainer>
        </BetaContainer>
      </BetaSponsors> */}
      <BottomContainer>
        <GammaSponsors>
          <GammaContainer>
            <SmallHeader>Delta Sponsors</SmallHeader>
            <GammaLogoContainer>
              {deltaSponsorsFirst.map(({ src, alt, link }) => (
                <SponsorLogo key={src}>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    <DeltaLogoImg src={src} alt={alt} />
                  </a>
                </SponsorLogo>
              ))}
            </GammaLogoContainer>
          </GammaContainer>
        </GammaSponsors>
        <DeltaSponsors>
          <DeltaContainer>
            <SmallHeader>Web3 Track Sponsors</SmallHeader>
            <DeltaLogoContainer>
              <DeltaLogoSecond>
                {deltaSponsorsSecond.map(({ src, alt, link, width }) => (
                  <SponsorLogo key={src}>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      <DeltaLogoImg src={src} alt={alt} width={width} />
                    </a>
                  </SponsorLogo>
                ))}
              </DeltaLogoSecond>
            </DeltaLogoContainer>
          </DeltaContainer>
        </DeltaSponsors>
      </BottomContainer>
    </SectionContainer>
  );
}

export default SponsorSection;
