import React, { useState, useEffect } from 'react';
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

  return (
    <Layout location={location}>
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
};
export default Homepage;
