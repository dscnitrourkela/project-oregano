import React from 'react';
import styled from 'styled-components';
import { HighlightBody } from '..';
import { testimonial } from '../../../config/content';

const Container = styled.div`
  width: 444px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  margin: 32px;
`;

const Profile = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled(HighlightBody)`
  text-align: left;
  margin-bottom: 32px;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-left: 14px;
`;

function Component() {
  return (
    <Container>
      <Profile src='https://avatars.githubusercontent.com/u/56754747?v=4' alt='name of person' />
      <DescWrapper>
        <Description>{testimonial.lorem}</Description>
        <HighlightBody>Abhibhaw Asthana</HighlightBody>
      </DescWrapper>
      <Logo src={testimonial.apostrophe} alt='Apostrophe Logo' />
    </Container>
  );
}

export default Component;
