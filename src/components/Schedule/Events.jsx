import React from 'react';

import schedule from '../../../config/content/Schedule';
import { ScheduleContainer, Box, Title, Title2 } from './Styles';

export const Events = () => (
  <>
    <ScheduleContainer>
      {schedule.day1.map(({ id, head, subhead, color }) => (
        <Box key={id} color={color}>
          <Title>{head}</Title>
          <Title2>{subhead}</Title2>
        </Box>
      ))}
    </ScheduleContainer>
    <ScheduleContainer>
      {schedule.day2.map(({ id, head, subhead, color }) => (
        <Box key={id} color={color}>
          <Title>{head}</Title>
          <Title2>{subhead}</Title2>
        </Box>
      ))}
    </ScheduleContainer>
    <ScheduleContainer>
      {schedule.day3.map(({ id, head, subhead, color }) => (
        <Box key={id} color={color}>
          <Title>{head}</Title>
          <Title2>{subhead}</Title2>
        </Box>
      ))}
    </ScheduleContainer>
    <ScheduleContainer>
      {schedule.day4.map(({ id, head, subhead, color }) => (
        <Box key={id} color={color}>
          <Title>{head}</Title>
          <Title2>{subhead}</Title2>
        </Box>
      ))}
    </ScheduleContainer>
  </>
);
