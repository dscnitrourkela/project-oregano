import React from 'react';
import HeroBtn from './HeroBtn';
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
          <HeroHeadingBase>
            <FIVEimg src={hero.imgs.five.src} />
          </HeroHeadingBase>
          <ContentBlock>
            <TaglineText>{hero.content}</TaglineText>
          </ContentBlock>
          <HeroBtn />
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}
