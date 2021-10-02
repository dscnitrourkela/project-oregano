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
  height: 320px;
  width: 1345px;
  margin: 32px auto 100px;
`;

const Heading = styled(Heading1)`
  margin: 32px 32px 0;
`;

function Testimonial() {
  return (
    <SectionLayout>
      <Wrapper>
        <Heading>Testimonials</Heading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', margin: 0 }}>
          <TestimonialComponent />
          <TestimonialComponent />
        </div>
      </Wrapper>
    </SectionLayout>
  );
}

export default Testimonial;
