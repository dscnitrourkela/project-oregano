import React from 'react';
import { Helmet } from 'react-helmet';
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
import ScheduleSection from '../components/ScheduleSection/ScheduleSection';
import Schedule from '../../config/content/Schedule';

export default function Home() {
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

      <Layout>
        <Hero />
        <Ticker />
        <Container>
          <Prizes />
          <ResponsiveCarousel />
          <Format />
          <ScheduleSection />
          <SponsorUs />
          <SponsorSection />
          <JoinUsSection />
          <FAQ />
        </Container>
      </Layout>
    </>
  );
}
