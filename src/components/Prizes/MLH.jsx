/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Container, Wrapper, FlippingCard, FlippingPrizeFront, FlippingPrizeBack } from './Common';
import { Body, Heading4 } from '..';

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
    id: 'mlh-prize-1',
    title: 'Best Web Monetization',
    content:
      'Coil is all about providing better ways to access and reward the creators, publishers and platforms that you love. Build a web monetized hack using Coil for a chance to win an',
    alt: 'Coil: Best Web Monetization Prize',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/xm6lhr5u8etpw3ui9sv8.png',
      width: '80%',
    },
    color1: '#E83426',
    color2: '#E83426',
  },
  {
    id: 'mlh-prize-2',
    title: 'Best Use of Linode',
    content:
      "Use any one of Linode's wide array of cloud products and take your hack to the next level! Whether you're looking for data storage, compute power or hosting, Linode has what you need and the complimentary credits to get you started. Sign up and start hacking for your chance to win a Rasberry Pi 4 Kit",
    alt: 'Linode: Best Use of Linode Prize',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/delta/jcr1qdx3oivszgrpxqml.png',
      width: '80%',
    },
    color1: '#1B4F97',
    color2: '#1B4F97',
  },
  {
    id: 'mlh-prize-3',
    title: 'Best Domain from GoDaddy Registry',
    content:
      'GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit! Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport',
    alt: 'GoDaddt: Best Domain Prize',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/pgi757nqnbf6sg81plgh.png',
      width: '80%',
    },
    color1: '#F8BA29',
    color2: '#F8BA29',
  },
  {
    id: 'mlh-prize-4',
    title: 'Creative use of Twilio',
    content:
      'Twilio allows you to incorporate mobile messaging, phone calls and a ton of other awesome communication features right into your hackathon project using web service APIs. Build a hack that simplifies your life using any one of Twilio’s APIs for a chance to win a Twilio Swag Box and GameGo Console',
    alt: 'Twilio: Creative use of Twilio',
    img: {
      src: 'https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/sponsors/anqmmhroafp5atvqbrb8.png',
      width: '80%',
    },
    color1: '#8D8D8C',
    color2: '#3F3F3F',
  },
];

const MLHPrizes = () => (
  <Container>
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
  </Container>
);

export default MLHPrizes;
