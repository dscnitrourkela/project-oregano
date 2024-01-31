import React from 'react';
import tw from 'twin.macro';
import { hero } from '../../../config';

const Wrapper = tw.div`
  flex
  justify-end
  items-center
  p-2.5
  border-2
  border-white
  bg-white
  rounded-md 
  h-11
`;
const Image = tw.img`
  h-6
  w-auto
  mr-3
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
