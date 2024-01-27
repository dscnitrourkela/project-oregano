/* eslint-disable max-len */
import React from 'react';

const Discord = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://discord.com/invite/yQZ368XPrB';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div
        className='apply-button'
        data-hackathon-slug='hacknitr5'
        data-button-theme='dark-inverted'
        style={{ height: '44px', minWidth: '270px', marginTop: '2rem', marginRight: '14px' }}
      >
        Discord
      </div>
    </div>
  );
};

export default Discord;
