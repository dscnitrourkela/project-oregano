/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Heading4 } from '..';

const Container = styled.div`
  margin: 0;
  background: transparent;
  min-width: 640px;
  min-height: 300px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  max-width: 20%;
`;

const Img = styled.img`
  width: ${({ width }) => width};
  height: auto;
`;

const PRIZES = [
  // {
  //   img: {
  //     src: '',
  //     width: '70%',
  //   },
  //   title: 'Codedamn 1 month pro',
  // },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/echoAR_-_Logo_2020_-_Knockout_c9smwf.png',
      width: '70%',
    },
    title: 'EchoAR Credits',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/lincode_y9pcdh.png',
      width: '70%',
    },
    title: 'Linode Credits',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/Untitled_nqdjaf.png',
      width: '70%',
    },
    title: 'Repl.it Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/sashido_xiu6is.png',
      width: '75%',
    },
    title: 'Shashido Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/taskade-circle-logo-full-white_iakfy1.png',
      width: '70%',
    },
    title: 'Taskade 1yr Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/Voiceflow_White_iczupf.png',
      width: '70%',
    },
    title: 'Voiceflow Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/xyz_ldytud.png',
      width: '70%',
    },
    title: 'XYZ Domains',
  },
];

const AllSubmissions = () => (
  <Container>
    {PRIZES.map(({ img, title }) => (
      <Wrapper key={title}>
        <Img src={img.src} alt={title} width={img.width} />
        <Heading4 style={{ marginTop: '0.5rem' }}>{title}</Heading4>
      </Wrapper>
    ))}
  </Container>
);

export default AllSubmissions;
