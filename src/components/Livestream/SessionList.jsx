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

const SessionList = () => (
  <Box>
    {[1, 2, 3, 4, 5].map((number) => (
      <Card key={number}>
        <Heading4>Some Heading</Heading4>
        <Body>Some Body</Body>
      </Card>
    ))}
  </Box>
);

export default SessionList;
