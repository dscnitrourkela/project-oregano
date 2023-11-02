import React from 'react';
import {
  HeroBody,
  NITRimg,
  HACKimg,
  HeroTitle,
  HeroInside,
  Tagline,
  TaglineText,
  HeroButtons,
  HeroHeading,
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
    <SectionContainer >
      <HeroBody >
        <HeroTitle className='hero h-100'>
          <HeroInside>
            <HACKimg src={hero.imgs.hack.src} alt={hero.imgs.hack.alt}/>
            <NITRimg src={hero.imgs.nitr.src} alt={hero.imgs.nitr.alt}/>
          </HeroInside>
          <heroBelow className='mx-8 md:max-w-xl lg:max-w-3xl'>
            <HeroHeading className='flex border-white w-full'>
              <HeroHeadingBase>
                <FIVEimg src={hero.imgs.five.src}/>
              </HeroHeadingBase>
            </HeroHeading>
            <Tagline>
              <TaglineText>{hero.content}</TaglineText>
            </Tagline>
          </heroBelow>
          <HeroButtons className='sm:gap-8'>
            <DevfolioButton/>
            <DiscordButton />
            <DiscordBtnMobile/>
          </HeroButtons>
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}
