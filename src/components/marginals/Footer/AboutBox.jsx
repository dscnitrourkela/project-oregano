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

const AboutContainer = ({ AbtLogo, about_content }) => {
  console.log(about_content);
  return (
    <FirstAboutContainer>
      <FirstRow>
        <FrItems>About US</FrItems>
        <FrItems>Contact US</FrItems>
        <FrItems>Sponsor US</FrItems>
      </FirstRow>

      <AboutBox>
        <LogoCont>
          <LogoImg src={AbtLogo.imgSrc} alt={about_content.img.alt} />
        </LogoCont>
        <Para>
          <Heading3>{about_content.title}</Heading3>
          <Content>{about_content.text}</Content>
        </Para>
      </AboutBox>
    </FirstAboutContainer>
  );
};

export default AboutContainer;
