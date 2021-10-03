import React from 'react';
import styled from 'styled-components';

// Import shared components
import { SectionLayout, Heading1 } from '..';
import TestimonialComponent from './Component';

// Content Imports
// import { testimonial } from '../../../config/content';

const Wrapper = styled.div`
  background-color: #17171e;
  border-radius: 16px;
  margin: 32px auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Heading = styled(Heading1)`
  margin: 32px 32px 0;
`;

function Testimonial() {
  return (
    <SectionLayout>
      <Wrapper>
        <Heading>Testimonials</Heading>

        <Grid>
          <TestimonialComponent />
          <TestimonialComponent />
        </Grid>
      </Wrapper>
    </SectionLayout>
  );
}

export default Testimonial;
