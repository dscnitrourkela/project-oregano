import React from 'react';
import { Layout } from '../components/shared/index';
import Container from '../components/shared/Container';
import '../styles/global.css';
import Hero from '../components/HeroSection/HeroSection';
import FAQ from '../components/FaqSection/Faq';
import SponsorUs from '../components/WhySponsorUs/WhySponsorUs';
import ResponsiveCarousel from '../components/carousel/ResponsiveCarousel';
import Format from '../components/Format';
import Prizes from '../components/Prizes';
import JoinUsSection from '../components/JoinUsSection/JoinUsSection';
import Ticker from '../components/Ticker';
import SponsorSection from '../components/SponsorsSection/SponsorSection';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Ticker />
        <Container>
          <Prizes />
          <ResponsiveCarousel />
          <Format />
          <SponsorUs />
          <SponsorSection />
          <JoinUsSection />
          <FAQ />
        </Container>
      </Layout>
    </>
  );
}
