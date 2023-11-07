import React from 'react';
import { Body2, Heading1 } from '../shared';
import Content from '../../../config/content/About';
import AboutContainer from './styles';
import Carousel from './Carousel';

const AboutUs = () => {
  return (
    <>
      <AboutContainer>
        <Heading1>About Us</Heading1>
        <Body2>{Content.desc}</Body2>
      </AboutContainer>
      <Carousel />
    </>
  );
};
export default AboutUs;
