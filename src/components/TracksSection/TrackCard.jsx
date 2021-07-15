import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
  bg-background-dark
  h-64
  w-1/4
  mt-5
  ml-5
  rounded
 `}
`;

const HeadingContainer = styled.div`
  ${tw`
   flex
   p-2
  `}
`;

const Heading = styled.h2`
  ${tw`
  text-heading-color-primary
  ml-5
  pt-5
 `}
`;

const Box = styled.div`
  ${tw`
  h-14
  w-14
  rounded
  bg-yellow-300
 `}
`;

const Paragraph = styled.p`
  ${tw`
  text-content-color-primary
  my-0
  mx-auto
  p-2
  leading-5
 `}
`;

function TrackCard() {
  return (
    <Container>
      <HeadingContainer>
        <Box />
        <Heading>Social Good</Heading>
      </HeadingContainer>
      <Paragraph>
        The ‘Make anything’ category of our event, this asks for the hacks which advance a whole new
        idea out from the grassroots level. The hacks need to be offering some ingenious ideas over
        any field they are directed towards, and will bring the best out of one’s hacking artistry.
      </Paragraph>
    </Container>
  );
}

export default TrackCard;
