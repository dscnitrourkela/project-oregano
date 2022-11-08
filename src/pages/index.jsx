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

// Components
import {
  HeroSection,
  Container,
  Moments,
  Sponsors,
  BeAHacker,
  Layout,
  SEO,
  Footer,
  Stats,
  TestimonialSection,
  AboutSection,
  MLHBanner,
} from '../components';

const Homepage = ({ location }) => {
  const isHome = location?.pathname === '/';
  const [loading, setLoading] = useState(isHome);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            block: id === 'sponsors' ? 'nearest' : 'center',
          });
          el.focus();
        }
        setLoading(true);
      }, 0);
    }
  }, [location.hash, loading]);

  return (
    <>
      <Helmet>
        <script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js.hs-scripts.com/8898157.js'
        />
        <script type='application/ld+json'>{JSON.stringify(eventData)}</script>
        <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
        <script type='application/ld+json'>{JSON.stringify(logoData)}</script>
        <script type='application/ld+json'>{JSON.stringify(breadcrumbsData)}</script>
      </Helmet>
      <SEO />

      <MLHBanner />

      <Layout location={location}>
        <HeroSection />
        <Container>
          <AboutSection />
          <Moments />
          <Sponsors />
          <Stats />
          <TestimonialSection />
          <BeAHacker />
        </Container>
        <Footer />
      </Layout>
    </>
  );
};
export default Homepage;
