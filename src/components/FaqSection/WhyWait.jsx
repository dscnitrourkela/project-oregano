import React from 'react';
import styled from 'styled-components';
import { faq } from '../../../config/content';
import { Heading2, Body } from '../shared';

const Wrapper = styled.div`
  background-color: #000;
  overflow: hidden;
  grid-column: span 2 / span 2;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2fr 2fr;
  border-radius: 8px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const Content = styled.div`
  padding: 7%;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  background-color: #17171d;
  border-radius: 8px 8px 0 0;
`;

const IllContainer = styled.div`
  display: grid;
  background-color: #17171d;
  border-radius: 8px 0 8px 0;
  height: 100%;
`;

const Illustration = styled.img`
  position: absolute;
  width: 90%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
`;

function WhyWait() {
  return (
    <Wrapper>
      <Content>
        <Heading2>Want to reach out to us?</Heading2>
        <Body>
          Drop us a mail on our official email ID. We would try to get back to you within 48 hours.
        </Body>
      </Content>
      <IllContainer>
        <a href='mailto:team@hacknitr.com'>
          <Illustration src={faq.email.src} alt={faq.email.alt} />
        </a>
      </IllContainer>
    </Wrapper>
  );
}

export default WhyWait;
