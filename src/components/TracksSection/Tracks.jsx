import React from 'react';

// Components
import { SectionLayout } from '..';
import Card from './Card';

// Assets
import { tracks } from '../../../config/content';

function Tracks() {
  return (
    <SectionLayout title={tracks.title} description={tracks.content}>
      <Card />
    </SectionLayout>
  );
}

export default Tracks;
