/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  background: transparent;
  min-width: 640px;
  min-height: 300px;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: ${({ width }) => width};
  height: auto;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/j2y0xpyhjgmvhnq0a8f0.png',
    alt: 'HackNITR 3.0 Tshirt',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/pwfq3h3ovxdenbtqhrp0.png',
    alt: 'Github Stickers',
    width: '230px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/h38wgim9kdnrjdyu3wba.png',
    alt: 'HackNITR Pizza Sticker',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/mptskzqaoktjqve4regw.png',
    alt: 'Hackintosh Sticker',
    width: '130px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/j4ukd7qnrwjbvfqql4hz.png',
    alt: 'Github Tshirts',
    width: '305px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/ia7lgmc4fbjdyhtidkiw.png',
    alt: 'Hack the future sticker',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/nx0prh2rldvg1log6f0g.png',
    alt: 'POOP Sticker',
    width: '200px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/le9hdlyitdpmdfmv4bsk.png',
    alt: 'Github Octocat Figurine',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/ck3g9vy8ihghhs7yvroq.png',
    alt: 'Hack Club Sticker',
    width: '160px',
  },
  {
    src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/prizes/qxest7dfj3dow5umshic.png',
    alt: 'Hacker Friends',
    width: '240px',
  },
];

const MLHPrizes = () => (
  <Container>
    {IMAGES.map(({ src, alt, width }) => (
      <Img src={src} alt={alt} width={width} key={alt} />
    ))}
  </Container>
);

export default MLHPrizes;
