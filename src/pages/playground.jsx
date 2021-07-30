import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body,
  HighlightBody,
  ButtonLight,
  ButtonDark,
  WhyWait,
} from '../components';

const Element = styled.div`
  ${tw`
    h-60
    w-auto
    bg-yellow-500
    flex
    justify-center
    items-center
    rounded-xl
    my-12
  `}
`;

const Paragraph = styled.p`
  ${tw`
    text-white
    text-lg
    font-extrabold
    w-9/12
    text-justify
  `}
`;

function playground() {
  const partials = {
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, impedit minus cupiditate
    fugit nulla cum, officia adipisci reprehenderit necessitatibus facilis, deleniti aliquam
    perspiciatis dolorem eveniet odio architecto iure recusandae quae!`,
  };

  return (
    <Container>
      <div>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading5</Heading5>
        <Body>Body</Body>
        <HighlightBody>Highlight Body</HighlightBody>
        <WhyWait />
        <Element>
          <Paragraph>{partials.content}</Paragraph>
        </Element>
        <ButtonLight>Button</ButtonLight>
        <ButtonDark>Button</ButtonDark>
      </div>
    </Container>
  );
}

export default playground;
