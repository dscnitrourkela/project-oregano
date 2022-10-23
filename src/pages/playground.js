import React from 'react';
import {
  Heading2,
  Heading3,
  Heading4,
  Body1,
  Body2,
  Caption,
  ButtonMeta,
  ButtonMetaLarge,
  NavText,
} from '../components/shared';

export default function Playground() {
  return (
    <div>
      <Heading2>Heading Two</Heading2>
      <Heading3>Heading Three</Heading3>
      <Heading4>Heading Four</Heading4>
      <Body1>Body One</Body1>
      <Body2>Body Two</Body2>
      <ButtonMetaLarge>Button & Meta Large</ButtonMetaLarge>
      <Caption>Caption</Caption>
      <NavText>Nav</NavText>
      <ButtonMeta>Button & Meta</ButtonMeta>
    </div>
  );
}
