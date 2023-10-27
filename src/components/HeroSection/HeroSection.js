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
  FIVEimg,
  
} from './styles';
import { Body1 } from '../shared';
import DevfolioButton from '../shared/DevfolioButton';
import DiscordButton from '../shared/DiscordButton';
// import { hero } from '../../../config/content';

export default function Hero() {
  return (
  
     <SectionContainer>
       <HeroBody>
         <HeroTitle className="hero h-100">
           <HeroInside>
            <HACKimg src={"https://res.cloudinary.com/dra96qhox/image/upload/v1698403802/ezgif.com-gif-maker_xtnlan.gif"} alt="HACK"></HACKimg>
            <NITRimg src={"https://res.cloudinary.com/dra96qhox/image/upload/v1698055003/NITREdited_gaxxwc.png"} alt="NITR"></NITRimg>
          </HeroInside>
           <HeroHeading className='flex border-white w-full'>
             <HeroHeadingBase>
               <FIVEimg src={"https://res.cloudinary.com/dra96qhox/image/upload/v1698054060/FIVE_kux2hx.png"}></FIVEimg> 
             </HeroHeadingBase>
       </HeroHeading>
           <Tagline>
          <TaglineText>Hop on the bandwagon, and join one of India’s largest Student-run hackathons. HackNITR is back with version 5.0, which is now fully offline!</TaglineText>
        </Tagline>
        <HeroButtons className='gap-1'>
          <DevfolioButton/>
          <DiscordButton/>
        </HeroButtons>
         </HeroTitle>
       </HeroBody>
    </SectionContainer> 
  );
} 
