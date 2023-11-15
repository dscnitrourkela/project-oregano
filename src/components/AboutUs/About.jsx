import React from 'react';
import Content from '../../../config/content/About';
import { AboutContainer, AboutContent, Heading } from './styles';
import Carousel from './Carousel';
import { Container } from '../shared';

const AboutSection = () => (
  <Container id='About'>
    <AboutContainer>
      <Heading>About Us</Heading>
      <AboutContent>{Content.desc}</AboutContent>
      <Carousel />
    </AboutContainer>
  </Container>
);

export default AboutSection;
