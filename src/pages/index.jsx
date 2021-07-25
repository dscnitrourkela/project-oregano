import React from 'react';
import { HeroSection, FAQ, Container, Tracks, Sponsors, BeAHacker, Layout } from '../components';

const Homepage = () => (
  <Layout>
    <HeroSection />
    <Container>
      <Tracks />
      <Sponsors />
      <FAQ />
      <BeAHacker />
    </Container>
  </Layout>
);
export default Homepage;
