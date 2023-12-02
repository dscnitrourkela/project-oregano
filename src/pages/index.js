import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { eventData, breadcrumbsData } from '../components/shared/SEO/structuredData';

import Container from '../components/shared/Container';
import '../styles/global.css';
import SEO from '../components/shared/SEO/SEO';
import ParticleBackground from '../components/shared/Particle';
import Layout from '../components/shared/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutUs/About';
import TimelineSection from '../components/TimelineSection/Timeline';
import SponsorSection from '../components/Sponsor/Sponsor';
import FAQ from '../components/Faq/Faq';
import Prizes from '../components/Prizes/Prizes';
import { Footer } from '../components/marginals';

const HomePage = ({ location }) => {
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
        <script type='application/ld+json'>{JSON.stringify(breadcrumbsData)}</script>
      </Helmet>
      <SEO />
      <ParticleBackground />
      <Layout location={location}>
        <HeroSection />
        <Container>
          <AboutSection />
          <Prizes />
          <TimelineSection />
          <SponsorSection />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export default HomePage;
