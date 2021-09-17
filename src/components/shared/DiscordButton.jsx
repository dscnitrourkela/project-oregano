import React from 'react';
import styled from 'styled-components';

import hero from '../../../config/content/Hero';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 9px 14px 8px;
  border-radius: 5px;
  margin-left: 14px;
`;

const Image = styled.img`
  height: 25px;
  width: auto;
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
