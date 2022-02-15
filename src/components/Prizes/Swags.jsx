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
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/WhatsApp_Image_2021-10-09_at_12.36_1_nf9ntu.png',
    alt: 'HackNITR 3.0 Tshirt',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/stickers_pack_1_882x882_pzavkm.png',
    alt: 'Github Stickers',
    width: '230px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Exp_1_1_czmu88.png',
    alt: 'HackNITR Pizza Sticker',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/macintosh_1_w0qhqt.png',
    alt: 'Hackintosh Sticker',
    width: '130px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_131_ztdbg4.png',
    alt: 'Github Tshirts',
    width: '305px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_gmhy2o.png',
    alt: 'Hack the future sticker',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Exp_2_1_ldibf8.png',
    alt: 'POOP Sticker',
    width: '200px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Small_Octocat_600x600_crop_center_1_owztsy.png',
    alt: 'Github Octocat Figurine',
    width: '150px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Screenshot_2021-10-09_at_1.33_1_rzblbc.png',
    alt: 'Hack Club Sticker',
    width: '160px',
  },
  {
    src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/friends_1_vgsamc.png',
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
