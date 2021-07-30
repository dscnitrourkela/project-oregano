import React from 'react';

// Components
import { Section } from '../shared';
import HackerCard from './HackerCard';

// Assets
import { hacker } from '../../../config/content';

const BeAHacker = () => (
  <Section title={hacker.title} description={hacker.content}>
    <HackerCard />
  </Section>
);

export default BeAHacker;
