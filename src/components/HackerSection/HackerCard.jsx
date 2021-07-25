import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import Title from '../shared/Typography/Heading4';
import Body from '../shared/Typography/Body';
import { hackerConstants } from './data';

const Card = styled.div`
  ${tw`
      bg-background-darker
      h-auto
      rounded-2xl
    `}
`;

const CardBody = styled.div`
  ${tw`
      p-6
    `}
`;

const CardImage = styled.img`
  ${tw`
      w-full
    `}
`;

const Description = styled.div`
  ${tw`
      py-1
    `}
`;

const Button = styled.button`
  ${tw`
      h-14
      w-48
      mt-6
      bg-white
      border-0
      hover:bg-black
      hover:text-white
      rounded-full
      cursor-pointer
    `}
`;

const CardCol = styled.div`
  ${tw`
      w-full
      grid
      grid-cols-track
      gap-7
    `}
`;

const HackerCard = () => (
  <CardCol>
    {hackerConstants.map(({ id, image, title, description, hasButton }) => (
      <Card key={id}>
        <CardImage src={image} alt={title} />
        <CardBody>
          <Title>{title}</Title>
          <Description>
            <Body>{description}</Body>
          </Description>
          {hasButton && <Button>Register Now</Button>}
        </CardBody>
      </Card>
    ))}
  </CardCol>
);

export default HackerCard;
