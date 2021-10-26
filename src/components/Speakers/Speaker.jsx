import React from 'react';

// Components
import { SectionLayout } from '..';
import { SpeakersContainer } from './styles';
import Card from './Cards';

// Assets
import { speakers } from '../../../config/content';

function Speakers() {
  return (
    <SectionLayout id='speakers' title={speakers.title} description={speakers.content}>
      <SpeakersContainer>
        {speakers.speakers.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </SpeakersContainer>
    </SectionLayout>
  );
}

export default Speakers;
