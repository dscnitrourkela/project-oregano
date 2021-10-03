import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Body, Heading4 } from '..';

const Card = styled.div`
  ${tw`
      w-full
      h-full
      rounded-lg

      flex
      flex-col
      items-center
      justify-start

      pt-6
      px-4
      pb-0
      m-0
      relative
  `};
  background: ${({ color1, color2 }) => `linear-gradient(135deg, ${color1}, ${color2})`};
  height: 430px;

  @media (max-width: 560px) {
    height: 370px;
  }
`;

const Heading = styled(Heading4)`
  ${tw`
    uppercase
    font-bold
  `}
`;

const Para = styled(Body)`
  ${tw`
    text-left
    mt-3
  `}
  color: white;
`;

const Img = styled.img`
  ${tw`
    w-auto
    h-auto
    absolute
    bottom-0
  `}

  width: ${({ width }) => width}
`;

export default function TrackCard({ card }) {
  const { title, content, alt, color1, color2, img } = card;

  return (
    <Card color1={color1} color2={color2}>
      <Heading>{title}</Heading>
      <Para>{content}</Para>
      <Img src={img.src} alt={alt} width={img.width} />
    </Card>
  );
}
