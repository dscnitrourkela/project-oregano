/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Banner = styled.a`
  display: block;
  position: sticky;
  top: 0;
  right: 5%;
  width: 100%;
  z-index: 3;
  min-width: 28px;
  max-width: 70px;
  @media (max-width: 1190px) {
    position: absolute;
    width: 8%;
  }

  @media (max-width: 540px) {
    position: absolute;
    width: 10%;
  }
`;

function MLHbanner() {
  return (
    <Banner
      href='https://mlh.io/seasons/2023/events?utm_source=apac-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2023-season&amp;utm_content=white'
      id='mlh-banner'
    >
      <img
        style={{ width: '100%' }}
        src='https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg'
        alt='Major League Hacking 2023 Hackathon Season'
      />
    </Banner>
  );
}

export default MLHbanner;
