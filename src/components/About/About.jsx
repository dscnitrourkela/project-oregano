import React from 'react';
import styled from 'styled-components';
import { Body2,Heading1 } from '../shared';
import Content from '../../../config/content/About'
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0px;
  overflow: hidden;
  width: 100%;
`;
const AboutUs = () => {
  return (
    <AboutContainer>
      <Heading1>About Us</Heading1>
      <Body2>
      {Content.desc}
      </Body2>  
    </AboutContainer>
  );
};
export default AboutUs;

