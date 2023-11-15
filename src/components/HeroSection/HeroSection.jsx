import React from 'react';
import {
  HeroBody,
  NITRimg,
  HACKimg,
  HeroTitle,
  HeroInside,
  ContentBlock,
  TaglineText,
  HeroButtons,
  SectionContainer,
  HeroHeadingBase,
  FIVEimg,
  DevButton,
} from './styles';
import { hero } from '../../../config';

export default function HeroSection() {
  return (
    <SectionContainer id='Home'>
      <HeroBody>
        <HeroTitle classname='hero h-100'>
          <HeroInside>
            <HACKimg src={hero.imgs.hack.src} alt={hero.imgs.hack.alt} />
            <NITRimg src={hero.imgs.nitr.src} alt={hero.imgs.nitr.alt} />
          </HeroInside>
          <ContentBlock>
            <HeroHeadingBase>
              <FIVEimg src={hero.imgs.five.src} />
            </HeroHeadingBase>
            <TaglineText>{hero.content}</TaglineText>
          </ContentBlock>
          <HeroButtons>
            <DevButton href='/'>Pre Register</DevButton>
          </HeroButtons>
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}
