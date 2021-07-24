import React from 'react';
import Sponsor from '../components/SponsorsSection/Sponsor';
import { Faq, Container, Tracks, Navbar } from '../components';

const Homepage = () => (
    <Container>
      <Tracks />
      <Faq />
      <Sponsor />
    </Container>
);

export default Homepage;
