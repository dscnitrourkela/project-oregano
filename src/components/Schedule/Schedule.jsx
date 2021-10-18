import React from 'react';

import { SectionLayout } from '..';
import { Wrapper, DateContainer, Date, Container, RowContainer } from './Styles';

import { Events } from './Events';
import { Slot } from './Slot';

import { schedule } from '../../../config/content/index';

function Schedule() {
  return (
    <Container>
      <SectionLayout title={schedule.title} description={schedule.content}>
        <Wrapper>
          <DateContainer>
            {schedule.date.map(({ id, day }) => (
              <Date key={id}>{day}</Date>
            ))}
          </DateContainer>
          <RowContainer>
            <Slot />
            <Events />
          </RowContainer>
        </Wrapper>
      </SectionLayout>
    </Container>
  );
}

export default Schedule;
