import React from 'react';

import {
  HeroSection,
  FAQ,
  Footer,
  Container,
  Tracks,
  Sponsors,
  BeAHacker,
  Layout,
} from '../components';

const Homepage = () => (
  <Layout>
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
