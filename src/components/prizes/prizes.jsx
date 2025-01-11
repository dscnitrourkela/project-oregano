'use client';

import { PRIZES } from '@/config/content/prizes';

import { H1, H3 } from '../shared/typography/Headings';
import PrizeCard from './prize-card';
import { PrizesContainer, PrizesContent, PrizesHeadingContainer } from './styles';

function Prizes() {
  return (
    <PrizesContainer>
      <div className='my-5 md:my-20'>
        <PrizesHeadingContainer>
          <H1>Prizes</H1>
        </PrizesHeadingContainer>
      </div>
      <PrizesContent>
        {PRIZES.map((prize) => (
          <PrizeCard prize={prize} key={prize.amount} />
        ))}
      </PrizesContent>
      <H3 className='mt-5'>Grab your winning tickets!</H3>
    </PrizesContainer>
  );
}

export default Prizes;
