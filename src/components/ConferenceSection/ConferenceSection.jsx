import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, ButtonLight, Container } from '..';
import Carousel from './Carousel';

// assets
import { conference } from '../../../config/content';

const ConfContainer = styled.div`
  ${tw`
      mt-40
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}
`;

const Description = styled(Body)`
  ${tw`
    mt-4
    w-2/4
    text-center
    md:w-full
  `}
`;

const Form = styled.div`
  ${tw`
    flex
    flex-row
    justify-center
    items-center
    border-2
    rounded-full
    border-solid
    my-7
    p-1.5
    h-auto
    w-2/4
    md:w-full
    border-white
    bg-transparent
  `}
`;

const Input = styled.input`
  ${tw`
    w-full
    text-white
    text-base
    bg-transparent
    border-0
    mr-3
    py-1
    px-2
    leading-tight
    focus:outline-none
  `}
`;

const Button = styled(ButtonLight)`
  ${tw`
      m-auto
      h-10
  `}
`;

// const Blur = styled.div`
//   background: radial-gradient(circle closest-side, transparent 90%, #000 100%);
//   ${tw`
//       z-auto
//       w-full
//       h-auto
//   `}
// `;

const ConfSection = () => (
  <ConfContainer>
    <Container>
      <SectionContainer>
        <Heading1>{conference.title}</Heading1>
        <Description>{conference.content}</Description>
        <Form>
          <Input type='text' placeholder='Email Address' />
          <Button>{conference.buttonText}</Button>
        </Form>
      </SectionContainer>
      {/* <Blur> */}
      <Carousel cards={conference.cards} />
      {/* </Blur> */}
    </Container>
  </ConfContainer>
);

export default ConfSection;
