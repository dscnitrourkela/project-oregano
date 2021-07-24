import React from 'react';
import { Faq, Container, Tracks, Sponsor } from '../components';

const Homepage = () => (
  <div>
    <Container>
      <Tracks />
      <Faq />
    </Container>
    <Sponsor />
  </div>
);

export default Homepage;
