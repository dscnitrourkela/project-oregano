// AboutUs.js

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0px;
  overflow: hidden;
  background-color: black;
  width: 100%;

`;

const Heading = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: white;
  ${'' /* max-width: 1000px; */}
  max-width: 60%;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
const AboutUs = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <Paragraph>
      HackNITR 5.0 is a hackathon to encourage you to use your imagination and invention to develop cutting-edge technology-based solutions to challenges in the real world. It was put together by a large group of tech enthusiasts from Google Developer Student Club (GDSC) NIT Rourkela and OpenCode. The main goal is to grow our local community and give hackers an unforgettable experience. The plethora of fun and excitement is waiting for you from 12th Jan 2024.
      </Paragraph>
      
    </AboutContainer>
  );
};

export default AboutUs;

