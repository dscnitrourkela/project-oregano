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

export default function Hero() {
  return (
    <SectionContainer>
      <HeroBody>
        <HeroTitle className="hero h-100">
          <HeroInside>
            <HACKimg src={"https://res.cloudinary.com/dra96qhox/image/upload/v1698227614/Hack2_1_zrv9oz.gif"} alt="HACK"></HACKimg>
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
        <HeroButtons className='gap-8'>
          <div className='border-white rounded-lg px-12 py-5 bg-white text-black text-extrabold sm:px-16 md:px-20 lg:px-28'>Box</div>
          <div className='border-white rounded-lg px-12 py-5 bg-white text-black text-extrabold sm:px-16 md:px-20 lg:px-28'>Box</div>
        </HeroButtons>
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}
