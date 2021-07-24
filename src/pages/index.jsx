import React from 'react';
import { HeroSection, FAQ, Container, Tracks, Sponsors, BeAHacker } from '../components';

const Homepage = () => (
  <div>
    <HeroSection />
    <Container>
      <Tracks />
      <Sponsors />
      <FAQ />
      <BeAHacker />
    </Container>
  </div>
);

export default Homepage;
