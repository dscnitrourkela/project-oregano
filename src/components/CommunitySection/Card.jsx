import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.div`
  ${tw`
        h-60
        m-2.5
        rounded-2xl
        flex
        flex-col
        justify-center
        items-center
        mid:h-48
    `};
  padding: 2px;
  background: ${({ color1, color2 }) => `linear-gradient(135deg, ${color1}, ${color2})`};
  max-width: 100%;
`;

const MainContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
        items-center
        rounded-2xl
        rounded-br-none
        rounded-bl-none
        w-full
        h-48
        bg-background-darker
    `}
`;

const Image = styled.img`
  ${tw`
        mt-4
        mid:mt-2
        h-auto
    `}
`;

const IconContainer = styled.div`
  ${tw`
        flex
        flex-row
    `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
        m-5
        cursor-pointer
        mid:m-2
        md:m-3
    `}
  color: #fff;
`;

const CommunityCard = ({ color, card }) => (
  <Card color1={color.color1} color2={color.color2}>
    <MainContainer>
      <Image src={card.image} style={{ width: `${card.width}` }} alt={card.name} />
    </MainContainer>
    <IconContainer>
      {card.socials.map(({ icon, link }) => (
        <a key={link} href={link} target='_blank' rel='noopener noreferrer'>
          <Icon icon={icon} size='lg' />
        </a>
      ))}
    </IconContainer>
  </Card>
);

export default CommunityCard;
