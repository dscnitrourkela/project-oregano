import React from 'react';

import Timeline from '../components/timeline/Timeline'
import { Body1, Body2, Heading1, Heading2, Heading3, Heading4, NavText, ButtonMeta, ButtonMetaLarge } from '../components';

export default function Playground() {
  let event={
    date:15,
    month:"October",
    title:"Registration Opens",
    date_end:"15 dec"
    }
  return (
    <div>
      <Heading1>Heading1</Heading1>
      <Heading2>Heading1</Heading2>
      <Heading3>Heading1</Heading3>
      <Heading4>Heading1</Heading4>
      <Body1>Heading1</Body1>
      <Body2>Heading1</Body2>
      <Timeline></Timeline>
      <Heading1 >GDSC</Heading1>
      <Heading1 className='italic' >GDSC</Heading1>
      <Heading2 >GDSC</Heading2>
      <Heading2 >GDSC</Heading2>
      <Heading3 >GDSC</Heading3>
      <Heading4 >GDSC</Heading4>
      <NavText >GDSC</NavText>
       <Body1>GDSC</Body1>
       <Body2>GDSC</Body2>
       <ButtonMeta>GDSC</ButtonMeta>
       <ButtonMetaLarge>GDSC</ButtonMetaLarge>
    </div>
  );
}
