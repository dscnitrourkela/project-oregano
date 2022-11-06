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

import content from '../../../config/hero'

import Title from '../shared/Typography/Heading4'

export default function Hero(){
  return(
    <HeroBody>
      <HeroTitle>
        <HACK src={content.Hackimg.src} alt={content.Hackimg.alt}/>
        <SubTitle>{content.titleLine.text}</SubTitle>
        <NITR src={content.NITRimg.src} alt={content.NITRimg.alt}/>
      </HeroTitle>

      <Tagline>
        <Title className=' font-Noto'>{content.tagline.taglinetext}</Title>
        <TaglineText>{content.tagline.taglinedesc}</TaglineText>
      </Tagline>

      <HeroButtons>
        <DevfolioBtn>{content.button.buttontext}</DevfolioBtn>
        <DiscBtn src={content.discordbtn.src} alt={content.discordbtn.alt}/>
      </HeroButtons>
    </HeroBody>
  )
}