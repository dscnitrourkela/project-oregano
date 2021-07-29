import React from 'react';
import styled from 'styled-components';
import { faq } from '../../../config/content';

// const Wrapper = styled.div`
//   ${tw`
//   mx-4
//   my-4
//   h-wait
//   md:h-wait-sm
//   w-wait
//   md:w-wait-sm
//   bg-black
//   grid
//   grid-cols-1
//   grid-rows-wait
//   rounded-lg
//   relative
//  `}
// `;

const Wrapper = styled.div`
  height: 575px;
  width: 430px;
  background-color: #000;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2fr 2fr;
  border-radius: 8px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const GreenBg = styled.div`
  background-color: #8fa963;
  border-radius: 8px 8px 0 0;
  height: 100%;
`;

const BlackBg = styled.div`
  background-color: #000;
  border-radius: 8px 0 8px 0;
`;

const Illustration = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
`;

function WhyWait() {
  return (
    <Wrapper>
      <GreenBg />
      <BlackBg>
        <Illustration src={faq.laptop.src} alt={faq.laptop.alt} />
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti tenetur
          pariatur, recusandae asperiores odio ut voluptatibus totam quod consectetur error at!
          Beatae maiores dolores soluta, voluptatibus facere repudiandae et.
        </p> */}
      </BlackBg>
    </Wrapper>
  );
}

export default WhyWait;
