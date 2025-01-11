'use client';

import { PRIZES } from '@/config/content/prizes';

import { H3 } from '../shared/typography/Headings';
import PrizeCard from './prize-card';
import { PrizesContainer, PrizesContent, PrizesHeading, PrizesHeadingContainer } from './styles';

function Prizes() {
  return (
    <PrizesContainer>
      <div className='my-5 md:my-20'>
        <PrizesHeadingContainer>
          <PrizesHeading>Prizes</PrizesHeading>
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
