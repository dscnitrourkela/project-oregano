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
} from './styles';
import DevfolioButton from '../shared/DevfolioButton';
import DiscordButton from '../shared/DiscordButton';
import DiscordBtnMobile from '../shared/DiscordBtnMobile';
import { hero } from '../../../config';

export default function Hero() {
  return (
    <SectionContainer>
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
          <HeroButtons className='sm:gap-8'>
            <DevfolioButton />
            <DiscordButton />
            <DiscordBtnMobile />
          </HeroButtons>
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}
