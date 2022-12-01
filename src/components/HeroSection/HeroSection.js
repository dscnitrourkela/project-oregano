import React from 'react';

import {
  HeroBody,
  HeroTitle,
  HACK,
  SubTitle,
  NITR,
  Tagline,
  TaglineText,
  HeroButtons,
} from './styles';

import content from '../../../config/content/Hero';
import SectionLayout from '../shared/SectionLayout';
import DevfolioBtn from '../shared/DevfolioBtn';
import DiscordBtn from '../shared/DiscordBtn';
import DiscordBtnMobile from '../shared/DiscordBtnMobile';
import Title from '../shared/Typography/Heading3';

export default function Hero() {
  return (
    <SectionLayout>
      <HeroBody>
        <HeroTitle>
          <HACK src={content.Hackimg.src} alt={content.Hackimg.alt} />
          <SubTitle>{content.titleLine.text}</SubTitle>
          <NITR src={content.NITRimg.src} alt={content.NITRimg.alt} />
        </HeroTitle>

        <Tagline>
          <Title className='font-Noto'>{content.tagline.taglinetext}</Title>
          <TaglineText>{content.tagline.taglinedesc}</TaglineText>
        </Tagline>

        <HeroButtons>
          <DevfolioBtn />
          <DiscordBtn />
          <DiscordBtnMobile />
        </HeroButtons>
      </HeroBody>
    </SectionLayout>
  );
}
