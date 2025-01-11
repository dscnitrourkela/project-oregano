import React from 'react';

import { hero } from '../../../config';
import Brochure from '../shared/Brochure';
import DiscordButton from '../shared/Discord';
import DiscordMobile from '../shared/DiscordMobile';
import PreRegisterBtn from '../shared/PreRegisterBtn';
import {
  ContentBlock,
  FIVEimg,
  HACKimg,
  HeroBody,
  Herodiv,
  HeroHeadingBase,
  HeroInside,
  HeroTitle,
  NITRimg,
  SectionContainer,
  TaglineText,
} from './styles';

export default function HeroSection() {
  return (
    <SectionContainer id='Home'>
      <HeroBody>
        <HeroTitle classname='hero h-100'>
          <HeroInside>
            <HACKimg src={hero.imgs.hack.src} alt={hero.imgs.hack.alt} />
            <NITRimg src={hero.imgs.nitr.src} alt={hero.imgs.nitr.alt} />
          </HeroInside>
          <HeroHeadingBase>
            <FIVEimg src={hero.imgs.five.src} />
          </HeroHeadingBase>
          <ContentBlock>
            <TaglineText>{hero.content}</TaglineText>
          </ContentBlock>
        </HeroTitle>
        <Herodiv>
          {/* <RegisterButton /> */}
          <DiscordButton />
          <PreRegisterBtn>Apply with Devfolio</PreRegisterBtn>
          <Brochure>Brochure</Brochure>
          <DiscordMobile />
        </Herodiv>
      </HeroBody>
    </SectionContainer>
  );
}
