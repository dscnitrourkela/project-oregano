import React from 'react';
import {Layout} from '../components/shared/index';
import Container from '../components/shared/Container';
import '../styles/global.css';
import Hero from '../components/HeroSection/HeroSection';
import FAQ from '../components/FaqSection/Faq';
import SponsorUs from '../components/WhySponsorUs/WhySponsorUs';

export default function Home() {
  return( 
    <>
      <Layout />
      <Hero />
      <Container>
        <SponsorUs />
        <FAQ />
      </Container>
  </>
  );
}
