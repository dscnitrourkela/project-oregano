import React from 'react';

import { HeroSection, FAQ, Container, Tracks, Sponsors } from '../components';

const Homepage = () => (
  <div>
    <HeroSection />
    <Container>
      <FAQ />
      <Tracks />
      <Sponsors />
    </Container>
  </div>
);

export default Homepage;
