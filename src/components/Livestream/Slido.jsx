import React from 'react';

// Libraries
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  height: calc(100vh-150px);
  background: #17171d;
`;

const Slido = ({ containerDimensions }) => (
  <Container>
    <iframe
      src='https://app.sli.do/event/qdroycx6'
      height='100%'
      width='100%'
      frameBorder='0'
      style={{ minHeight: `${containerDimensions.height - 50}px` }}
      title='Slido'
    />
  </Container>
);

export default Slido;
