import React from 'react';

// Components
import { SectionLayout } from '..';
import { Wrapper, StatsContainer, MobImage } from './styles';
import { CardContainers } from './Winners';
import { Circle } from './Circle';
// assets

import { stats } from '../../../config/content/index';

function Stats() {
  return (
    <SectionLayout title={stats.title} description={stats.content}>
      <Wrapper>
        <StatsContainer>
          <CardContainers />
          <MobImage src={stats.statsMobile.icon} />
        </StatsContainer>
        <Circle />
      </Wrapper>
    </SectionLayout>
  );
}

export default Stats;
