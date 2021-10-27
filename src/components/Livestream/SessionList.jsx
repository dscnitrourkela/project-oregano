import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Heading4, Body } from '..';

const Box = styled.div`
  grid-column: 2/3;
  border-radius: 4px;
  height: auto;
  max-height: calc(100vh - 150px);
  overflow-y: scroll;
  padding-bottom: 0px;
`;

const Card = styled.div`
  background: #17171d;
  border: 1px solid #3b3b3b;
  border-radius: 4px;
  margin-bottom: 0.9rem;
  padding: 1rem;
  min-height: 150px;
  width: 97%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SpeakerDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  object-position: center;
  margin-right: 0.6rem;
  border-radius: 100%;
`;

const SessionList = ({ sessionDetails }) => (
  <Box>
    {sessionDetails
      ?.filter(({ hasCompleted }) => !hasCompleted)
      ?.map(({ img, date, time, name, title, designation = 'HackNITR 3.0 Speaker' }) => (
        <Card key={name}>
          <Heading4>{title}</Heading4>
          <Body>
            {date}, {time}
          </Body>

          <SpeakerDetails>
            <Img src={img} />
            <div>
              <Heading4>{name}</Heading4>
              <Body>{designation}</Body>
            </div>
          </SpeakerDetails>
        </Card>
      ))}
  </Box>
);

export default SessionList;
