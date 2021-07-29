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
  Footer,
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
    <Footer />
  </Layout>
);
export default Homepage;
