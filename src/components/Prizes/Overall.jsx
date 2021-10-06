import React from 'react';

// Libraries
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  background: transparent;
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
`;

const PrizeAmount = styled.h3`
  font-size: 45px;
  font-weight: bold;
  line-height: 60px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: white;
`;

const PrizeDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: white;
`;

const SinglePrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PRIZES = [
  {
    medal: {
      color1: '#F7971E',
      color2: '#FFD200',
      text: '1st',
    },
    amount: '₹25,000',
    description: 'Click below for more prizes!',
  },
  {
    medal: {
      color1: '#757F9A',
      color2: '#D7DDE8',
      text: '2nd',
    },
    amount: '₹15,000',
    description: 'Click below for more prizes!',
  },
  {
    medal: {
      color1: '#232526',
      color2: '#414345',
      text: '3rd',
    },
    amount: '₹10,000',
    description: 'Click below for more prizes!',
  },
];

const OverallPrizes = () => (
  <Container>
    <PrizesContainer>
      {PRIZES.map(({ medal, amount, description }) => (
        <SinglePrizeContainer key={amount}>
          <Medal color1={medal.color1} color2={medal.color2}>
            {medal.text}
          </Medal>
          <div style={{ marginLeft: 40 }}>
            <PrizeAmount>{amount}</PrizeAmount>
            <PrizeDescription>{description}</PrizeDescription>
          </div>
        </SinglePrizeContainer>
      ))}
    </PrizesContainer>

    <ImgContainer>
      <Img
        // eslint-disable-next-line max-len
        src='https://res.cloudinary.com/dscnitrourkela/image/upload/project-oregano/assets/te02riyuhoh5gtxyska8abc.png'
        alt='HackNITR 3.0 Prizes'
      />
    </ImgContainer>
  </Container>
);

export default OverallPrizes;
