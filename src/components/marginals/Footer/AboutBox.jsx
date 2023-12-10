import React from 'react';
import { Heading3 } from '../..';
import {
  FirstAboutContainer,
  FirstRow,
  FrItems,
  AboutBox,
  Para,
  Content,
  LogoCont,
  LogoImg,
} from './styles';

const AboutContainer = ({ AbtLogo, aboutContent, abtLinks }) => (
  <FirstAboutContainer>
    <FirstRow>
      {abtLinks.map((link) => (
        <FrItems href={link.url} key={link.id}>
          {link.title}
        </FrItems>
      ))}
    </FirstRow>

    <AboutBox>
      <LogoCont>
        <LogoImg src={AbtLogo.imgSrc} alt={aboutContent.img.alt} />
      </LogoCont>
      <Para>
        <Heading3>{aboutContent.title}</Heading3>
        <Content>{aboutContent.text}</Content>
      </Para>
    </AboutBox>
  </FirstAboutContainer>
);

export default AboutContainer;
