/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Container, Wrapper, FlippingCard, FlippingPrizeFront, FlippingPrizeBack } from './Common';
import { Body, Heading4 } from '..';

const NewContainer = styled(Container)`
  grid-template-columns: repeat() (auto-fit, minmax(250px, 1fr));
`;

const Front = styled(FlippingPrizeFront)`
  width: 100%;
  height: 100%;
  background: ${({ deg, color1, color2 }) => `linear-gradient(${deg}, ${color1}, ${color2})`};

  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Back = styled(FlippingPrizeBack)`
  background: ${({ deg, color1, color2 }) => `linear-gradient(${deg}, ${color1}, ${color2})`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: ${({ width }) => width};
  height: auto;
`;

const List = styled(Body)`
  color: white;
`;

const TRACKS = [
  {
    id: 'sponsored-track-prize-1',
    title: 'Best hack built with Ethereum',
    content:
      'Polygon (previously Matic) will be giving away a cash prize for the best hack built on top of Ethereum (Rs.10000) during the hackathon. For teams that integrate Polygon in their hacks as well, the prize money will be higher (Rs.15000) along with eligibility for internship/full-time role interviews and a chance to land seed funding of up to 5000 USD!',
    alt: 'Polygon: Best Ethereum Hack',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/beta/ag8zpyl5g1ldxpxgfslh.png',
      width: '80%',
    },
    color1: '#FFC41D',
    color2: '#B98C0A',
  },
  {
    id: 'sponsored-track-prize-2',
    title: 'Best Use of Tezos',
    content:
      '20000 INR for best Dapp built on Tezos, 25000 INR for building a Flutter Tezos Wallet App, Continuity grant opportunity up to 5,000 USD for an outstanding project, Every valid submission made in the Tezos track will be rewarded with exclusive Schwag Kits.',
    alt: 'Tezos: Best Use of Tezos Prize',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/beta/pc6gl1q0iojabd98zfde.png',
      width: '80%',
    },
    color1: '#71A0CE',
    color2: '#3A7BD5',
  },
  {
    id: 'sponsored-track-prize-3',
    title: 'Best Dapp built with Celo',
    content:
      '20000 INR for best Dapp built on Celo. Celo is a mobile-first platform that makes financial dApps and crypto payments accessible to anyone with a mobile phone',
    alt: 'Belo: Best Dapp with Celo Prize',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/beta/ogjutyp26djnh9lrzybl.png',
      width: '80%',
    },
    color1: '#8FA963',
    color2: '#648B23',
  },
  {
    id: 'sponsored-track-prize-4',
    title: 'Best use of Filecoin',
    content:
      '20000 INR for best use of IPFS and/or Filecoin. Filecoin is an open-source cloud storage marketplace, protocol, and cryptocurrency',
    alt: 'Filecoin: Best Dapp with Filecoin',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/beta/ps74duvfnma7sjh455de.svg',
      width: '80%',
    },
    color1: '#E78967',
    color2: '#CA5024',
  },
  {
    id: 'sponsored-track-prize-5',
    title: 'Creative Use of Sawo',
    content:
      '$100 Prize to winning team, , 1-month free Inaugurate Tier access, Feature in our Blogs & Articles, SAWO funds 100% of the Playstore/App store subscription fee for the best mobile apps, SAWO funds 100% of the hosting fee for the best web-apps. For extra special products - Special opportunity to pitch your hack to VCs',
    alt: 'Sawo: Creative use of Sawo',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/tjxlxskmlgk87qego2cj.png',
      width: '80%',
    },
    color1: '#E78967',
    color2: '#CA5024',
  },
  {
    id: 'sponsored-track-prize-6',
    title: 'Mental Health Track',
    content: 'Goodies from Rahee',
    alt: 'Rahee: Mental health track',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/Community%20Partners/rezmsmpf5b7ynktvufyt.png',
      width: '60%',
    },
    color1: '#8FA963',
    color2: '#648B23',
  },
  {
    id: 'sponsored-track-prize-7',
    title: 'Best project on KOII Network',
    content:
      'First Prize - $1000 USDT, Second Prize - $500 USDT, 100 KOII - Most pull requests on Atomic NFT Repo, 100 KOII - Everyone who adds a new standard to Atomic NFT',
    alt: 'KOII: Creative use of KOII',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/gamma/zcnuwxnahcm8ai30npsp.png',
      width: '40%',
    },
    color1: '#71A0CE',
    color2: '#3A7BD5',
  },
  {
    id: 'sponsored-track-prize-8',
    title: 'Best use of ML/AI',
    content:
      'All participants will have the chance to participate in our Machine Learning Challenge and apply for an Internship at SashiDo.',
    alt: 'Shashido: Creative use of ML/AI',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/beta/iylv4cyswfjzoydb3why.png',
      width: '80%',
    },
    color1: '#FFC41D',
    color2: '#B98C0A',
  },
];

const MLHPrizes = () => (
  <NewContainer>
    {TRACKS.map(({ title, id, color1, color2, img, content }) => (
      <Wrapper key={id}>
        <FlippingCard>
          <Front color1={color1} color2={color2} deg='135deg'>
            <Img src={img.src} alt={title} width={img.width} />
            <Heading4 style={{ marginTop: 10, fontWeight: '600' }}>{title}</Heading4>
          </Front>
          <Back color1={color1} color2={color2} deg='135deg'>
            <List>{content}</List>
          </Back>
        </FlippingCard>
      </Wrapper>
    ))}
  </NewContainer>
);

export default MLHPrizes;
