import React from 'react';

// Libraries
import Helmet from 'react-helmet';

// Assets
import {
  eventData,
  breadcrumbsData,
  faqData,
  logoData,
} from '../components/shared/SEO/structuredData';

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
  <>
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(eventData)}</script>
      <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
      <script type='application/ld+json'>{JSON.stringify(logoData)}</script>
      <script type='application/ld+json'>{JSON.stringify(breadcrumbsData)}</script>
    </Helmet>
    <SEO />

    <Layout>
      <HeroSection />
      <Container>
        <Tracks />
        <Sponsors />
        <FAQ />
        <BeAHacker />
      </Container>
    </Layout>
  </>
);
export default Homepage;
