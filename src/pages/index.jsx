import React from 'react';

import { HeroSection, FAQ, Container, Tracks, Sponsors } from '../components';

const Homepage = () => (
  <div>
    <Container>
      <HeroSection />
      <FAQ />
      <Tracks />
      <Sponsors />
    </Container>
  </div>
);

export default Homepage;
