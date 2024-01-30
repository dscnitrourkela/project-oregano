import React from 'react';
import Content from '../../../config/content/About';
import { AboutContainer, AboutContent, Heading } from './styles';
import Carousel from './Carousel';

const AboutUs = () => {
  return (
    <>
      <AboutContainer>
        <Heading>About Us</Heading>
        <AboutContent>{Content.desc}</AboutContent>
      </AboutContainer>
      <Carousel />
    </>
  );
};
export default AboutUs;
