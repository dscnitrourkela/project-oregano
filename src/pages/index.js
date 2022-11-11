import React from 'react';
import { Layout } from '../components/shared/index';
import '../styles/global.css';

import FAQ from '../components/FaqSection/Faq';
import Container from '../components/shared/Container';

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <FAQ />
        </Container>
      </Layout>
    </>
  );
}
