import React, { useState, useEffect } from 'react';


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
  Footer,
} from '../components';

const Homepage = ({ location }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) return;

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
          setLoading(true);
        }
      }, 0);
    }
  }, [location.hash, loading]);

return(
  <>
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(eventData)}</script>
      <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
      <script type='application/ld+json'>{JSON.stringify(logoData)}</script>
      <script type='application/ld+json'>{JSON.stringify(breadcrumbsData)}</script>
    </Helmet>
    <SEO />

    <Layout location={location}>
      <HeroSection />
      <Container>
        <Tracks />
        <Sponsors />
        <FAQ />
        <BeAHacker />
      </Container>
      <Footer />
    </Layout>
</>
)
};
export default Homepage;
