import React from 'react';
import {
  HeroSection,
  FAQ,
  Container,
  Tracks,
  Sponsors,
  BeAHacker,
  Layout,
  SEO,
} from '../components';

const Homepage = () => (
  <Layout>
    <SEO />
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
