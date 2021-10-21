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
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-oregano/sponsors/gamma/xffabbcsz6p7ddyp3li0.png',
      width: '70%',
    },
    title: 'EchoAR Credits',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-oregano/sponsors/delta/jcr1qdx3oivszgrpxqml.png',
      width: '70%',
    },
    title: 'Linode Credits',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-oregano/sponsors/delta/vs6j6vhnblodwddpnxeu.png',
      width: '70%',
    },
    title: 'Repl.it Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-oregano/sponsors/beta/iylv4cyswfjzoydb3why.png',
      width: '70%',
    },
    title: 'Shashido Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-oregano/sponsors/gamma/vgblcn40kjajxwxmph68.png',
      width: '70%',
    },
    title: 'Taskade 1yr Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/v1634369574/project-oregano/sponsors/gamma/hendtn2wfa16wyuxk7.png',
      width: '70%',
    },
    title: 'Voiceflow Subscription',
  },
  {
    img: {
      src: 'https://res.cloudinary.com/riteshsp2000/image/upload/project-oregano/sponsors/beta/zuvuxsxn7zukvrtx5swz.png',
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
