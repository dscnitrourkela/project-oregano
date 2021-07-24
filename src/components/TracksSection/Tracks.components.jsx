import styled from 'styled-components';
import tw from 'twin.macro';

export const Heading = styled.div`
  ${tw`
        mt-20
        grid
        gap-2
        lg:grid-rows-1 grid-cols-1
   `}
`;

export const Sub = styled.div`
  ${tw`
       w-100
       lg:w-full
   `}
`;

export const Tracks1 = styled.div`
  ${tw`
       grid
       grid-cols-track
       gap-5
       mt-10
   `}
`;

export const Tracks2 = styled.div`
  ${tw`
        grid
        grid-rows-3
        gap-3
   `}
`;

export const Head = styled.div`
  ${tw`
      row-start-2
      row-end-4
   `}
`;

export const Cards = styled.div`
  ${tw`
      bg-secondary
      rounded-lg
      p-4
   `}
`;

export const Head2 = styled.div`
  ${tw`
      grid
      grid-cols-4
      items-center
   `}
`;

export const Text = styled.div`
  ${tw`
       col-start-2
       col-end-5
       justify-center
       ml-3
   `}
`;
