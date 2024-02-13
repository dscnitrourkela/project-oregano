/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Banner = styled.a`
  display: block;
  position: absolute;
  top: 0;
  right: 50px;
  width: 10%;
  z-index: 3;
  min-width: 60px;
  max-width: 100px;

  @media (max-width: 1190px) {
    width: 8%;
  }

  @media (max-width: 720px) {
    width: 15%;
   
    display: block
    top: 0; 
    left: 0; 
    max-width: none; 
    min-width: unset; 
  }
`;

function MLHBanner() {
  return (
    <Banner
      href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white'
      id='mlh-trust-badge'
      target='_blank'
    >
      <img
        style={{ width: '100%' }}
        // eslint-disable-next-line max-len
        src='https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg'
        alt='Major League Hacking 2024 Hackathon Season'
      />
    </Banner>
  );
}

export default MLHBanner;
