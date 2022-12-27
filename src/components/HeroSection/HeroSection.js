import React from 'react';

import {
  HeroBody,
  HeroTitle,
  SubTitle,
  Tagline,
  TaglineText,
  HeroButtons,
  HeroHeading,
  SectionContainer,
  TagHead,
} from './styles';

import { hero } from '../../../config';
import { DevfolioBtn, DiscordBtn, DiscordBtnMobile } from '../shared';

export default function Hero() {
  return (
    <SectionContainer id={hero.id}>
      <HeroBody>
        <HeroTitle>
          <HeroHeading src={hero.Hackimg.src} alt={hero.Hackimg.alt} />
          <SubTitle>{hero.titleLine.text}</SubTitle>
          <HeroHeading src={hero.NITRimg.src} alt={hero.NITRimg.alt} />
        </HeroTitle>

        <Tagline>
          <TagHead>{hero.tagline.taglinetext}</TagHead>
          <TaglineText>{hero.tagline.taglinedesc}</TaglineText>
        </Tagline>

        <HeroButtons>
          <DevfolioBtn />
          <DiscordBtn />
          <DiscordBtnMobile />
        </HeroButtons>
      </HeroBody>
    </SectionContainer>
  );
}
