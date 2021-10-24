/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { SectionLayout } from '..';
import { Wrapper, Buttton } from './Styles';

// import { Events } from './Events';
// import { Slot } from './Slot';

import { schedule } from '../../../config/content/index';

function Schedule() {
  return (
    <SectionLayout title={schedule.title} description={schedule.content}>
      <a href={schedule.button}>
        <Buttton>Add To Calendar</Buttton>
      </a>

      <Wrapper>
        {/* <DateContainer>
            {schedule.date.map(({ id, day }) => (
              <Date key={id}>{day}</Date>
            ))}
          </DateContainer>
          <RowContainer>
            <Slot />
            <Events />
          </RowContainer> */}

        <iframe
          className='airtable-embed'
          src='https://airtable.com/embed/shr3hO4GmOExTOsWA?backgroundColor=blue'
          frameborder='0'
          onmousewheel=''
          width='1250'
          height='500'
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        ></iframe>
      </Wrapper>
    </SectionLayout>
  );
}

export default Schedule;
