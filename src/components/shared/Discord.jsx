import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { hero } from '../../../config';

const Wrapper = styled.div`
  ${tw`
  lg:flex
  justify-end
  items-center
  p-2.5
  border-2
  border-white
  bg-white
  rounded-md 
  h-11
  sm:hidden
  md:hidden
  `}
`;
const Image = styled.img`
  ${tw`
  h-6
  w-auto
  `}
`;

function DiscordButton() {
  return (
    <Wrapper>
      <a href={hero.links.discord.link} target='_blank' rel='noreferrer noopener'>
        <Image src={hero.links.discord.icon} alt='Discord Icon' />
      </a>
    </Wrapper>
  );
}
export default DiscordButton;
