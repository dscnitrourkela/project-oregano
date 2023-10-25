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
      <Timeline></Timeline>
    </div>
  );
}
