import React from 'react';

import { HeroSection, Faq, Container, Tracks } from '../components';

const Homepage = () => (
  <div>
    <Container>
      <HeroSection/>
      <Faq />
      <Tracks />
    </Container>
  </div>
);

export default Homepage;
