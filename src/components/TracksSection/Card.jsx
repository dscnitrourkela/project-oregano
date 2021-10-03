import React from 'react';

// Components
import { Card, Heading, Para, Img } from './styles';

export default function TrackCard({ card }) {
  const { title, content, alt, color1, color2, img } = card;

  return (
    <Card color1={color1} color2={color2}>
      <Heading>{title}</Heading>
      <Para>{content}</Para>
      <Img src={img.src} alt={alt} width={img.width} />
    </Card>
  );
}
