import React from 'react';
import styled from 'styled-components';

import { hero } from '../../../config';

const Wrapper = styled.div`
  display: none;

  @media (max-width: 542px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    padding: 4px 40px 3px;
    border-radius: 4px;
    margin-top: 14px;
    height: 40px;
    width: auto;
  }
`;

const Image = styled.img`
  height: 30px;
  width: auto;
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
