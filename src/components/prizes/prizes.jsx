'use client';

import { PRIZES } from '@/config/content/prizes';

import { H1 } from '../shared/typography/Headings';
import PrizeCard from './prize-card';
import { PrizesContainer, PrizesContent, PrizesHeadingContainer } from './styles';

function Prizes() {
  return (
    <PrizesContainer>
      <PrizesHeadingContainer>
        <H1>Prizes</H1>
      </PrizesHeadingContainer>
      <PrizesContent>
        {PRIZES.map((prize) => (
          <PrizeCard prize={prize} key={prize.amount} />
        ))}
      </PrizesContent>
    </PrizesContainer>
  );
}

export default Prizes;
