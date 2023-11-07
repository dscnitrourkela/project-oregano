import React from 'react';
import { Body2, Heading1 } from '../shared';
import Content from '../../../config/content/About';
import {AboutContainer,AboutContent} from './styles';
import Carousel from './Carousel';

const AboutUs = () => {
  return (
    <>
      <AboutContainer>
        <Heading1>About Us</Heading1>
        <AboutContent>{Content.desc}</AboutContent>
      </AboutContainer>
      <Carousel />
    </>
  );
};
export default AboutUs;
