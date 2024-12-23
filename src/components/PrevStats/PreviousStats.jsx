import React from 'react';
import {
  Heading,
  SectionContainer,
  SectionStats,
  SectionCard,
  Circle,
  StatValue,
  StatCaption,
} from './styles';

const prevstat = {
  data: {
    id: 1,
    version: '5.0',
    registration: '5000+',
    projects: '500+',
    partners: '500+',
  },
};

const PreviousStats = () => (
    <SectionContainer>
      <Heading id='Stats'>HackNITR 5.0 Stats</Heading>
      <SectionStats>
        <SectionCard>
          <Circle size='200' color='#18586d' />
          <StatValue color='#35e1ff'>{prevstat.data.projects}</StatValue>
          <StatCaption>Projects</StatCaption>
        </SectionCard>
        <SectionCard>
          <Circle size='300' color='#672b2d' />
          <StatValue main color='#f1604f'>
            {prevstat.data.registration}
          </StatValue>
          <StatCaption main>Registeration</StatCaption>
        </SectionCard>
        <SectionCard>
          <Circle size='200' color='#516331' />
          <StatValue color='#cfff5e'>{prevstat.data.partners}</StatValue>
          <StatCaption>Community Partners</StatCaption>
        </SectionCard>
      </SectionStats>
    </SectionContainer>
  );

export default PreviousStats;
