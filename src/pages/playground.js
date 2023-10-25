import React from 'react';
import { Body1, Body2, Heading1, Heading2, Heading3, Heading4 } from '../components';
import Timeline from '../components/timeline/Timeline'
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
    </div>
  );
}
