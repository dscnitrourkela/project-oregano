import React from 'react';
import { Layout } from '../components/shared/index';
import Container from '../components/shared/Container';
import '../styles/global.css';
import Hero from '../components/HeroSection/HeroSection';
import FAQ from '../components/FaqSection/Faq';
import SponsorUs from '../components/WhySponsorUs/WhySponsorUs';
import { SponsorSection } from '../components';
import ResponsiveCarousel from '../components/carousel/ResponsiveCarousel';
import Format from '../components/Format';
import Prizes from '../components/Prizes';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Container>
          <ResponsiveCarousel />
          <FAQ />
          <SponsorUs />
          <SponsorSection />
          <Format />
          <Prizes />
        </Container>
      </Layout>
    </>
  );
}
