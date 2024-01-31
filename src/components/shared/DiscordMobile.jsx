import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { hero } from '../../../config';

const Wrapper = styled.div`
  ${tw`
  hidden lg:flex
  justify-start
  items-center
  bg-white
  p-1
  md:p-4
  border-2
  border-white
  rounded
  mt-14
  h-10
  w-auto
`}
`;

const Image = styled.img`
  ${tw` 
 h-7
  w-auto
`}
`;

function DiscordMobile() {
  return (
    <Wrapper>
      <a href={hero.links.discordMobile.link} target='_blank' rel='noreferrer noopener'>
        <Image src={hero.links.discordMobile.icon} alt='Discord Icon' />
      </a>
    </Wrapper>
  );
}

export default DiscordMobile;
