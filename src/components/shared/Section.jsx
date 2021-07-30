import React from 'react';
import { Heading1, Subtitle, SectionContainer } from '.';

function Section({ children, title, description }) {
  return (
    <SectionContainer>
      <Heading1>{title}</Heading1>
      <Subtitle>{description}</Subtitle>
      {children}
    </SectionContainer>
  );
}

export default Section;
