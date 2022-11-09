import React from 'react';

import Faq from '../components/FaqSection/Faq';
import Container from '../components/shared/Container';

export default function Home() {
  return (
    <>
      <Container>
        <h1 className='text-3xl font-bold underline text-color-primary'>HackNITR 4.0</h1>
        <Faq />
      </Container>
    </>
  );
}
