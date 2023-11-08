import React, { useState } from 'react';
import "./DevfolioBtn.css"

const RegisterButton = () =>{
  {
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
      setClicked(true);
    };

    return (
      <div className={`btn ${clicked ? 'clicked' : ''}`} >
        <div className="register_btn">
          <button type="submit" onClick={handleButtonClick}>
            REGISTER
          </button>
        </div>
      </div>
    );
  };
}

  export default RegisterButton;
