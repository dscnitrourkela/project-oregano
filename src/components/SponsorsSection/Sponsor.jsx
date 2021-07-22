import React from 'react';
import { SponsorContainer } from './SponsorContainer';
import { HeadingSection, HeadText } from './SponsorHeading';
import { Heading1, Heading2, Container, SectionContainer } from '..';
import SponsorIcon from './SponsorIcon';
import { AlphaSponsorList, BetaSponsorList, GammaSponsorList } from './SponserImg';

function Sponsor() {
  return (
    <SectionContainer>
      <Container>
        <HeadingSection>
          <Heading1>Our Awesome Sponsors</Heading1>

          <HeadText>
            Vel lobortis porttitor eget dignissim. Facilisi euismod nullam nunc quisque egestas Want
            to join the HackNITR family?
            <a href='/'> Sponsor Us</a>
          </HeadText>
        </HeadingSection>

        <HeadingSection>
          <Heading2>Alpha Sponsors</Heading2>
        </HeadingSection>

        <SponsorContainer>
          {AlphaSponsorList.map(({ src }, index) => (
            <SponsorIcon key={index} pic={src} />
          ))}
        </SponsorContainer>

        <HeadingSection>
          <Heading2>Beta Sponsors</Heading2>
        </HeadingSection>

        <SponsorContainer>
          {BetaSponsorList.map(({ src }, index) => (
            <SponsorIcon key={index} pic={src} />
          ))}
        </SponsorContainer>

        <HeadingSection>
          <Heading2>Gamma Sponsors</Heading2>
        </HeadingSection>

        <SponsorContainer>
          {GammaSponsorList.map(({ src }, index) => (
            <SponsorIcon key={index} pic={src} />
          ))}
        </SponsorContainer>
      </Container>
    </SectionContainer>
  );
}

export default Sponsor;
