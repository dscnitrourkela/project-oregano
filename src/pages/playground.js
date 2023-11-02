import React from 'react';
import Hero from '../components/HeroSection/HeroSection';
import {
  Body1,
  Body2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  NavText,
  ButtonMeta,
  ButtonMetaLarge,
} from '../components';

export default function Playground() {
  return (
    <div>
      <Hero/>
      <Heading1>GDSC</Heading1>
      <Heading1 className='italic'>GDSC</Heading1>
      <Heading2>GDSC</Heading2>
      <Heading2>GDSC</Heading2>
      <Heading3>GDSC</Heading3>
      <Heading4>GDSC</Heading4>
      <NavText>GDSC</NavText>
      <Body1>GDSC</Body1>
      <Body2>GDSC</Body2>
      <ButtonMeta>GDSC</ButtonMeta>
      <ButtonMetaLarge>GDSC</ButtonMetaLarge>
    </div>
  );
}