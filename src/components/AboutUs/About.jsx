import React from 'react';
import Content from '../../../config/content/About';
import { AboutContainer, AboutContent, Heading } from './styles';

const AboutSection = () => (
  <AboutContainer id='About'>
    <Heading>About Us</Heading>
    <AboutContent>{Content.desc}</AboutContent>
  </AboutContainer>
);

export default AboutSection;
