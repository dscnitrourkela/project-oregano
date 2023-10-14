



import React from 'react';

import {
  HeroBody,
  NITRimg,
  HACKimg,
  HeroTitle,
  HeroInside,
  SubTitle,
  Tagline,
  TaglineText,
  HeroButtons,
  HeroHeading,
  SectionContainer,
  TagHead,
  HeroHeadingBase,
} from './styles';
import NITR from "../../../images/NITREdited.png"
import HACK from "../../../images/HackDesign-crop.gif"
import FIVE from "../../../images/FIVE.png"

import { hero } from '../../../config';
import { DevfolioBtn, DiscordBtn } from '../shared';
export default function Hero() {
  return (
    <SectionContainer id={hero.id}>
      <HeroBody>
        <HeroTitle className="hero h-100">
          <HeroInside className='w-52 sm:w-64 md:w-80 lg:w-96 gap-0'>
            <HACKimg className='hack_img w-60 sm:w-68 md:w-72 lg:w-96' src={HACK} alt="HACK"></HACKimg>
            <img className='nitr_img w-64 md:w-72 lg:w-96' src={NITR} alt="NITR"></img>
          </HeroInside>
          <HeroHeading>
            <HeroHeadingBase>
            <img src={FIVE} className='w-16 md:w-20 lg:w-28' />
            </HeroHeadingBase>
          </HeroHeading>
          <Tagline>
          <TaglineText>{hero.tagline.taglinedesc}</TaglineText>
        </Tagline>
        <HeroButtons>
          <DevfolioBtn />
          <DiscordBtn />
        </HeroButtons>
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}