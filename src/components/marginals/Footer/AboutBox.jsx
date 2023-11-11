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

const AboutContainer = ({ AbtLogo, about_content, abtLinks }) => {
  return (
    <FirstAboutContainer>
      <FirstRow>
        {abtLinks.map((link) => (
          <FrItems href='#' key={link.id}>
            {link.title}
          </FrItems>
        ))}
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
