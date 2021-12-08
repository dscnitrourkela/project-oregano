import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
// import { Heading4, Body } from '..';

// Components
import DetailsBox from './DetailsBox';
import { Heading3 } from '../shared';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  background: transparent;
  min-width: 640px;
`;

const PrizesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: transparent;
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Img = styled.img`
  width: 90%;
  height: auto;
`;

const Medal = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color1, color2 }) => `linear-gradient(90deg, ${color1}, ${color2})`};

  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: white;
  line-height: 32px;
  border-radius: 50%;

  @media (max-width: 800px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

const PrizeAmount = styled.h3`
  font-size: 45px;
  font-weight: bold;
  line-height: 60px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: white;

  @media (max-width: 800px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

const PrizeDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: white;

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const SinglePrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const List = styled.li`
  margin-top: 10px;
  color: white;
  font-family: Roboto;
  text-align: left;
  padding: 3px;
`;

const PRIZES = [
  {
    id: 'overall-prize-1',
    medal: {
      color1: '#F7971E',
      color2: '#FFD200',
      text: '1st',
    },
    amount: '₹20,000',
    title: 'Overall 1st Prize',
    prizes: [
      {
        prize: 'HackNITR Special Swag Box',
      },
      {
        prize: '2-months Codedamn Premium Coupons for all members',
      },
      {
        prize: '250$ Digitalocean credits',
      },
      {
        prize: 'CodedamnMerch for all members',
      },
      {
        prize: 'EggHead Premium Coupons for all members',
      },
      {
        prize: 'Leading Learners Student Pack',
      },
      {
        prize: ' Taskade Lifetime Pro Plan for all members',
      },
      {
        prize: 'EchoAR Credits for all memberss',
      },
      {
        prize: 'Repl.it Subscription for all members',
      },
      {
        prize: 'Sashido Subscription for all members',
      },
      {
        prize: 'Voiceflow Premium for all members',
      },
      {
        prize: 'XYZ domain names for all members',
      },
      {
        prize: 'Linode Credits for all members',
      },
      {
        prize: 'Codedamn Premium for 1-month',
      },
    ],
  },
  {
    id: 'overall-prize-2',
    medal: {
      color1: '#757F9A',
      color2: '#D7DDE8',
      text: '2nd',
    },
    amount: '₹15,000',
    title: 'Overall 2nd Prize',
    prizes: [
      {
        prize: 'HackNITR Special Swag Box',
      },
      {
        prize: '250$ Digitalocean credits',
      },
      {
        prize: 'EggHead Premium Coupons',
      },
      {
        prize: 'Leading Learners Student Pack',
      },
      {
        prize: 'Taskade Lifetime Pro Plan',
      },
      {
        prize: 'Repl.it Subscription for all members',
      },
      {
        prize: 'Sashido Subscription for all members',
      },
      {
        prize: 'Voiceflow Premium for all members',
      },
      {
        prize: 'XYZ domain names for all members',
      },
      {
        prize: 'Linode Credits for all members',
      },
      {
        prize: 'Codedamn Premium for 1-month',
      },
    ],
  },
  {
    id: 'overall-prize-3',
    medal: {
      color1: '#232526',
      color2: '#414345',
      text: '3rd',
    },
    amount: '₹10,000',
    title: 'Overall 3rd Prize',
    prizes: [
      {
        prize: 'HackNITR Special Swag Box',
      },
      {
        prize: '250$ Digitalocean credits',
      },
      {
        prize: 'EggHead Premium Coupons',
      },
      {
        prize: 'Leading Learners Student Pack',
      },
      {
        prize: 'Taskade Lifetime Pro Plan',
      },
      {
        prize: 'Repl.it Subscription for all members',
      },
      {
        prize: 'Sashido Subscription for all members',
      },
      {
        prize: 'Voiceflow Premium for all members',
      },
      {
        prize: 'XYZ domain names for all members',
      },
      {
        prize: 'Linode Credits for all members',
      },
      {
        prize: 'Codedamn Premium for 1-month',
      },
    ],
  },
];

const OverallPrizes = () => {
  const [modalOpen, setModalOpen] = useState();

  return (
    <Container>
      <PrizesContainer>
        {PRIZES.map(({ medal, id, amount, title, prizes }) => (
          <SinglePrizeContainer key={id}>
            <Medal color1={medal.color1} color2={medal.color2}>
              {medal.text}
            </Medal>
            <div style={{ marginLeft: 40 }}>
              <PrizeAmount>{amount}</PrizeAmount>
              <PrizeDescription>
                <a
                  href
                  type='button'
                  onClick={() => setModalOpen(id)}
                  id={id}
                  style={{ cursor: 'pointer' }}
                >
                  Click below for more prizes!
                </a>
              </PrizeDescription>
            </div>

            <DetailsBox prizeId={id} isOpen={modalOpen === id} close={() => setModalOpen()}>
              <Heading3 style={{ textAlign: 'Left' }}>{title}</Heading3>
              {prizes.map(({ prize }) => (
                <List key={id}>
                  {prize}
                  <br />
                </List>
              ))}
            </DetailsBox>
          </SinglePrizeContainer>
        ))}
      </PrizesContainer>

      <ImgContainer>
        <Img
          // eslint-disable-next-line max-len
          src='https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_126_nxjzmv.png'
          alt='HackNITR 3.0 Prizes'
        />
      </ImgContainer>
    </Container>
  );
};

export default OverallPrizes;
