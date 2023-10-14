/* eslint-disable max-len */
// import React from 'react';
import React, { useState } from 'react';
import "./DevfolioBtn.css"

const RegisterButton = () =>{
  {
    const [clicked, setClicked] = useState(false);
  
    const handleButtonClick = () => {
      setClicked(true);
    };
  
    return (
      <div className={`btn ${clicked ? 'clicked' : ''}`} ontouchstart="">
        <div className="register_btn">
          <button onClick={handleButtonClick}>
            <a href="">REGISTER</a>
          </button>
        </div>
      </div>
    );
  };
}
  
  export default RegisterButton;
