import React from 'react';
import Content from '../../../config/content/About';
import { AboutContainer, AboutContent, Heading } from './styles';
import Carousel from './Carousel';

const AboutSection = () => (
  <AboutContainer id='About'>
    <Heading>About Us</Heading>
    <AboutContent>{Content.desc}</AboutContent>
    <Carousel />
  </AboutContainer>
);

export default AboutSection;
