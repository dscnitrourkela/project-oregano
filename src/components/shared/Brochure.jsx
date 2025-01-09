import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`
 flex
  justify-center
  items-center
  p-2.5
  border-2
  border-white
  bg-white
  rounded-md 
  h-11
  text-[#23272a]
  font-Inter
  font-bold
  lg:w-auto
  w-full
  `}
`;

const link = 'https://drive.google.com/file/d/1EUQ0uAw3nWfUOIrx411GGzrcSrPmV9u3/';

function Brochure({ children }) {
  return (
    <Wrapper>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href={link} target='_blank' rel='noreferrer noopener'>
        {children}
      </a>
    </Wrapper>
  );
}

export default Brochure;
