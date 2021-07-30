import React from 'react';

// Components
import { Section } from '..';
import Card from './Card';

// Assets
import { tracks } from '../../../config/content';

function Tracks() {
  return (
    <Section title={tracks.title} description={tracks.content}>
      <Card />
    </Section>
  );
}

export default Tracks;
