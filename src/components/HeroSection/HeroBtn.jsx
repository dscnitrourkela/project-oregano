/* eslint-disable max-len */
import React, { useState } from 'react';
import { Button } from './styles';

const HeroBtn = () => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  return (
    <Button className={`btn ${clicked ? 'clicked' : ''}`}>
      <div>
        <button onClick={handleButtonClick} type='button'>
          <a href='https://forms.gle/U5ChTxGNzDHhrYjg8' target='__blank' rel='noreferrer'>
            PRE-REGISTER
          </a>
        </button>
      </div>
    </Button>
  );
};

export default HeroBtn;
