import React from 'react';
import { stats } from '../../../config/content/index';
import { Heading2, Heading3, Heading4, Heading5 } from '..';
import { StatsContainer2, YellowDiv, BlueDiv, GreenDiv, Description } from './styles';

export const Circle = () => (
  <StatsContainer2>
    <Heading2 style={{ padding: '25px', paddingBottom: '8px' }}>{stats.stats.title}</Heading2>
    <Description style={{ paddingLeft: '25px' }}>{stats.stats.content}</Description>
    <YellowDiv>
      <div>
        <Heading4 style={{ fontWeight: 'inherit' }}>Registrations</Heading4>
        <Heading2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>2171</Heading2>
      </div>
    </YellowDiv>
    <BlueDiv>
      <div>
        <Heading5 style={{ fontWeight: 'inherit', color: 'white', textAlign: 'center' }}>
          Project Submissions
        </Heading5>
        <Heading3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>127</Heading3>
      </div>
    </BlueDiv>
    <GreenDiv>
      <div>
        <Heading5 style={{ fontWeight: 'inherit', color: 'white', textAlign: 'center' }}>
          Sessions Organised
        </Heading5>
        <Heading3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>26</Heading3>
      </div>
    </GreenDiv>
  </StatsContainer2>
);
