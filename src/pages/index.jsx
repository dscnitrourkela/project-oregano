import React from 'react';
import { HeroSection, FAQ, Container, Footer, Tracks, Sponsors, BeAHacker } from '../components';

const Homepage = () => (
  <div>
    <HeroSection />
    <Container>
      <Tracks />
      <Sponsors />
      <FAQ />
      <BeAHacker />
      <Footer />
    </Container>
  </div>
);

export default Homepage;
