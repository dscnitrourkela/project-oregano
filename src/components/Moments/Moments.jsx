import React from 'react';
import { SectionLayout } from '..';
import { Wrapper } from '../Schedule/Styles';
import { moments } from '../../../config/content/index';

function Schedule() {
  return (
    <SectionLayout id='moments' title={moments.title} description={moments.content}>
      <Wrapper>
        <iframe
          allowfullscreen
          id='wallsio-iframe'
          src='https://my.walls.io/k4eyr?nobackground=1&amp;show_header=0'
          width='1250'
          height='600'
          style={{ background: 'transparent', border: '1px solid #ccc' }}
          loading='lazy'
          title='My social wall'
        ></iframe>
      </Wrapper>
    </SectionLayout>
  );
}

export default Schedule;
