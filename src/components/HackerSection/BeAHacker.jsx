import React from 'react';

// Components
import { SectionLayout } from '../shared';
import HackerCard from './HackerCard';

// Assets
import { hacker } from '../../../config/content';

const BeAHacker = () => (
  <SectionLayout title={hacker.title} description={hacker.content}>
    <HackerCard />
  </SectionLayout>
);

export default BeAHacker;
