import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading3 } from '..';

const Card = styled.div`
  ${tw`
        border-solid
        border-2
        border-white
        bg-background-darker
        h-60
        m-2.5
        rounded-2xl
        p-3
        py-10
        flex
        flex-col
        justify-center
        items-center
        md:h-40
    `};

  max-width: 100%;
`;

const Title = styled(Heading3)`
  ${tw`
        mt-6
        px-5
        text-center
        bg-transparent
        mid:text-xl
        mid:px-3
        md:text-3xl
        sm:text-base
        sm:px-1
    `}
`;

const Image = styled.img`
  ${tw`
        h-auto
        w-28
        mid:w-20
        md:w-32
        sm:w-20
    `}
`;

const IconContainer = styled.div`
  ${tw`
        flex
        flex-row
        mt-2
    `}
`;

const Icon = styled(FontAwesomeIcon)`
  color: rgba(255, 255, 255, 0.4);
  ${tw`
        ml-5
        cursor-pointer
        mid:ml-2.5
    `}
`;

const CommunityCard = ({ card }) => (
  <Card>
    <Image src={card.image} alt={card.name} />
    <Title>{card.name}</Title>
    <IconContainer>
      {card.socials.map(({ icon, link }) => (
        <a key={link} href={link} target='_blank' rel='noopener noreferrer'>
          <Icon icon={icon} size='xl' />
        </a>
      ))}
    </IconContainer>
  </Card>
);

export default CommunityCard;
