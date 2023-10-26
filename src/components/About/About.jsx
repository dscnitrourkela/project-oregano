import React from 'react';
import styled from 'styled-components';
import { Body2,Heading1 } from '../shared';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0px;
  overflow: hidden;
  width: 100%;

`;

const Heading = styled.h2`
  color: white;
  font-size: 4rem;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  color: white;
  ${'' /* max-width: 1000px; */}
  max-width: 60%;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    max-width: 80%;
    text-align: left;
  }
`;
const AboutUs = () => {
  return (
    <AboutContainer>
      <Heading><Heading1>About Us</Heading1></Heading>
      <Paragraph>
      <Body2>
      HackNITR 5.0 is a hackathon to encourage you to use your imagination and invention to develop cutting-edge technology-based solutions to challenges in the real world. It was put together by a large group of tech enthusiasts from Google Developer Student Club (GDSC) NIT Rourkela and OpenCode. The main goal is to grow our local community and give hackers an unforgettable experience. The plethora of fun and excitement is waiting for you from 12th Jan 2024.
      </Body2>
      </Paragraph>
      
    </AboutContainer>
  );
};

export default AboutUs;

