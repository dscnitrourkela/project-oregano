/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

const A = styled.a`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0px;
  width: 10%;
  z-index: 100000;

  @media (max-width: 560px) {
    right: 15px;
  }
`;

const MLHBanner = () => (
  <A
    id='mlh-trust-badge'
    href='https://mlh.io/seasons/2023/events?utm_source=apac-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2023-season&amp;utm_content=red'
    target='_blank'
    rel='noreferrer'
  >
    <img
      src='https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-red.svg'
      alt='Major League Hacking 2022 Hackathon Season'
      style={{ width: '100%' }}
    />
  </A>
);

export default MLHBanner;
