import React from 'react';

import Prizes from '../components/Prizes/Prizes';

import SponsorSection from "../components/sponsor section/Sponsor";
import FAQ from '../components/Faq/Faq';
import Timeline from '../components/timeline/Timeline';


export default function Playground() {
  return (
    <div>

      <Prizes />

      <SponsorSection />
      <Timeline />
      <FAQ />

    </div>
  );
}
