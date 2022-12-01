import React from 'react';
import styled from 'styled-components';
import content from '../../../config/content/Hero';

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #fff;
  padding: 9px 14px 8px;
  border-radius: 4px;
  margin-left: 14px;

  @media (max-width: 542px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 25px;
  width: auto;
`;

function DiscordButton() {
  return (
    <Wrapper>
      <a href={content.links.discord.link} target='_blank' rel='noreferrer noopener'>
        <Image src={content.links.discord.icon} alt='Discord Icon' />
      </a>
    </Wrapper>
  );
}

export default DiscordButton;
