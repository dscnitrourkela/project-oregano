import React from 'react';
import {
  HeroBody,
  NITRimg,
  HACKimg,
  HeroTitle,
  HeroInside,
  ContentBlock,
  TaglineText,
  SectionContainer,
  HeroHeadingBase,
  FIVEimg,
  Herodiv,
} from './styles';
import { hero } from '../../../config';
import RegisterButton from '../shared/DevfolioBtn';
import Discord from '../shared/Discord';

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
          <RegisterButton />
          <Discord />
        </Herodiv>
      </HeroBody>
    </SectionContainer>
  );
}
