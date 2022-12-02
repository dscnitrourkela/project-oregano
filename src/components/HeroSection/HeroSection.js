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
} from './styles';

import { hero } from '../../../config';
import { DevfolioBtn, DiscordBtn, DiscordBtnMobile, Heading3 } from '../shared';

export default function Hero() {
  return (
    <SectionContainer>
      <HeroBody>
        <HeroTitle>
          <HeroHeading src={hero.Hackimg.src} alt={hero.Hackimg.alt} />
          <SubTitle>{hero.titleLine.text}</SubTitle>
          <HeroHeading src={hero.NITRimg.src} alt={hero.NITRimg.alt} />
        </HeroTitle>

        <Tagline>
          <Heading3 semibold className='font-Noto'>
            {hero.tagline.taglinetext}
          </Heading3>
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
