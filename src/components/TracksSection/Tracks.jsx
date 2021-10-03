import React from 'react';

// Components
import { SectionLayout } from '..';
import { TracksContainer } from './styles';
import Card from './Card';

// Assets
import { tracks } from '../../../config/content';

function Tracks() {
  return (
    <SectionLayout id='tracks' title={tracks.title} description={tracks.content}>
      <TracksContainer>
        {tracks.tracks.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </TracksContainer>
    </SectionLayout>
  );
}

export default Tracks;
