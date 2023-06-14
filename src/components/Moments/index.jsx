import React from 'react';
import { SectionLayout } from '..';
import { moments } from '../../../config';

function Moments() {
  return (
    <SectionLayout id='moments' title={moments.title} description={moments.content}>
      <div className='flex mt-5'>
        <iframe
          allowfullscreen
          id='wallsio-iframe'
          src='https://my.walls.io/k4eyr?nobackground=1&amp;show_header=0'
          width='1250'
          height='600'
          style={{ background: 'transparent', border: '1px solid #ccc' }}
          loading='lazy'
          title='My social wall'
        />
      </div>
    </SectionLayout>
  );
}

export default Moments;
