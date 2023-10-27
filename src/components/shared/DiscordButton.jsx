// import React from 'react';
// import styled from 'styled-components';

// import hero from '../../../config/content/Hero';

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   background-color: #fff;
//   padding:9px 14px 8px;
//   // width:32px;
//   border-radius: 4px;
//   margin-left: 14px;
//   box-shadow: #C48DFF 3px 3px, #FF8CD9 6px 6px, #35E1FF 9px 9px;

//   @media (max-width: 542px) {
//     display: none;
//   }
// `;

// const Image = styled.img`
//   height: 45px;
//   width: full;
// `;

// function DiscordButton() {
//   return (
//     <Wrapper>
//       <a href={hero.links.discord.link} target='_blank' rel='noreferrer noopener' >
//         <Image src={hero.links.discord.icon} alt='Discord Icon' />
//       </a>
//     </Wrapper>
//   );
// }

// export default DiscordButton;
import React from 'react';
import styled from 'styled-components';
import { hero } from '../../../config';
import "./DevfolioBtn.css"

function DiscordButton() {
  return (
    
    <div className="btn" ontouchstart="">
        <div className="register_btn">
          <button><a href="">D</a></button>
        </div>
      </div>
    
  );
}

export default DiscordButton;