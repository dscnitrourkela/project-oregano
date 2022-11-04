import React from 'react';

import{
  HeroBody,
  HeroTitle,
  HACK,
  SubTitle,
  NITR,
  Tagline,
  TaglineText,
  HeroButtons,
  DevfolioBtn,
  DiscBtn
} from './styles'

import Hackimg from '../../../images/hack.png'
import NITRimg from '../../../images/NITR.png'
import discord from '../../../images/discord.png'

import content from '../../../config/hero'

import Title from '../shared/Typography/Heading4'

export default function Hero(){
  return(
    <HeroBody>
      <HeroTitle>
        <HACK src={Hackimg}/>
        <SubTitle>{content.titleLine.text}</SubTitle>
        <NITR src={NITRimg}/>
      </HeroTitle>

      <Tagline>
        <Title className=' font-Noto'>{content.tagline.taglinetext}</Title>
        <TaglineText>{content.tagline.taglinedesc}</TaglineText>
      </Tagline>

      <HeroButtons>
        <DevfolioBtn>{content.button.buttontext}</DevfolioBtn>
        <DiscBtn src={discord}/>
      </HeroButtons>
    </HeroBody>
  )
}