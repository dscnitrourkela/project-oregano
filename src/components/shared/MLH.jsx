/* eslint-disable max-len */
import React from 'react';

const MLHBanner = () => (
  <a
    id='mlh-trust-badge'
    style={{
      display: 'block',
      maxWidth: '100px',
      minWidth: '60px',
      position: 'fixed',
      right: '50px',
      top: '0px',
      width: '10%',
      zIndex: 100000,
    }}
    href='https://mlh.io/seasons/2022/events?utm_source=apac-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2022-season&amp;utm_content=yellow'
    target='_blank'
    rel='noreferrer'
  >
    <img
      src='https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-yellow.svg'
      alt='Major League Hacking 2022 Hackathon Season'
      style={{ width: '100%' }}
    />
  </a>
);

export default MLHBanner;
