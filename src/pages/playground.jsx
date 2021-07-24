import React from 'react';
import {
  SectionContainer,
  Container,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body,
  HighlightBody,
  Button,
} from '../components';

function playground() {
  return (
    <Container>
      <SectionContainer>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading5</Heading5>
        <Body>Body</Body>
        <HighlightBody>Highlight Body</HighlightBody>
        <Button>Button</Button>
      </SectionContainer>
    </Container>
  );
}

export default playground;
