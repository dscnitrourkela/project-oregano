import React from 'react';
import { Layout } from '../components/shared/index';
import Container from '../components/shared/Container';
import '../styles/global.css';

import SponsorUs from '../components/WhySponsorUs/WhySponsorUs';

export default function Home() {
  return (
    <Layout>
      <Container>
        <SponsorUs />
      </Container>
    </Layout>
  );
}
