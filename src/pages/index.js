import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { eventData, breadcrumbsData } from '../components/shared/SEO/structuredData';

import { Layout, SectionLayout } from '../components/shared/index';
import Container from '../components/shared/Container';
import '../styles/global.css';
import Hero from '../components/HeroSection/HeroSection';
import FAQ from '../components/FaqSection/Faq';
import Ticker from '../components/Ticker';
import SponsorSection from '../components/SponsorsSection/SponsorSection';
import SEO from '../components/shared/SEO/SEO';
import { CommunitySection } from '../components';
import Moments from '../components/Moments';
import { about } from '../../config';

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

      <Layout>
        <Hero />
        <Ticker />
        <Container>
          <SectionLayout id='about' title={about.title} description={about.content} />;
          <Moments />
          <SponsorSection />
          <CommunitySection />
          {/* <JoinUsSection /> */}
          <FAQ />
        </Container>
      </Layout>
    </>
  );
};

export default HomePage;
