import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ContainerStyle = styled.div`
  ${tw`
      w-11/12 
      max-w-7xl 
      my-0 
      mx-auto  
      overflow-hidden
      px-0
      py-2
      sm:p-3
  `}
`;

function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;
