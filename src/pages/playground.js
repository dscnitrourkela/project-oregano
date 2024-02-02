import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import HeroSection from '../components/HeroSection/HeroSection';
// import { Container } from '../components/shared/SectionContainer';
import Layout from '../components/shared/Layout';
import AboutSection from '../components/AboutUs/About';
import SponsorSection from '../components/Sponsor/Sponsor';
import FAQ from '../components/Faq/Faq';
import { Footer } from '../components/marginals';
import Prizes from '../components/Prizes/Prizes';
import PreviousStats from '../components/PrevStats/PreviousStats';
import ParticleBackground from '../components/shared/Particle';
import Timeline from '../components/TimelineSec/Timeline';

const Homepage = ({ location }) => {
  const isHome = location?.pathname === '/';
  const [loading, setLoading] = useState(isHome);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1);
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
      </Helmet>
      {/* <ParticleBackground /> */}
      <Layout location={location}>
        <HeroSection />
        {/* <Container> */}
        {/* <PreviousStats />
          <AboutSection />
          <Prizes />
          <Timeline />
          <SponsorSection />
          <FAQ /> */}
        {/* </Container> */}
        {/* <Footer /> */}
      </Layout>
    </>
  );
};
export default Homepage;
