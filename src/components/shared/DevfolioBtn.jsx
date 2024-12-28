/* eslint-disable max-len */
import React from 'react';

const RegisterButton = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
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
        data-hackathon-slug='hacknitr6'
        data-button-theme='dark-inverted'
        style={{ height: '44px', minWidth: '270px', marginTop: '2rem', marginRight: '14px' }}
      >
        Apply with Devfolio
      </div>
    </div>
  );
};

export default RegisterButton;
