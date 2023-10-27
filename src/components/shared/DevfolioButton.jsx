// /* eslint-disable max-len */
// import React from 'react';

// const RegisterButton = () => {
//   React.useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://apply.devfolio.co/v2/sdk.js';
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignContent: 'center',
//       }}
//     >
//       <div
//         className='apply-button'
//         data-hackathon-slug='hacknitr4'
//         data-button-theme='dark-inverted'
//         style={{
//           height: '64px',
//           minWidth: '270px',
//           marginTop: '2rem',
//           marginRight: '14px',
//           boxShadow: '3px 3px 0 #C48DFF, 6px 6px 0 #FF8CD9, 9px 9px 0 #35E1FF'
//         }}
//       >
//         Apply with Devfolio
//       </div>
//     </div>
//   );
// };

// export default RegisterButton;

import React, { useState } from 'react';
import "./DevfolioBtn.css"
import ButtonMetaLarge from './Typography/ButtonMetaLarge';


const RegisterButton = () =>{
  {
    const [clicked, setClicked] = useState(false);
  
    const handleButtonClick = () => {
      setClicked(true);
    };
  
    return (
      <div className={`btn ${clicked ? 'clicked' : ''}`} ontouchstart="">
        <div className="register_btn" style={{  }}>
          <button onClick={handleButtonClick}>
            <a href="" >REGISTER</a>
          </button>
        </div>
      </div>
    );
  };
}
  
  export default RegisterButton;

