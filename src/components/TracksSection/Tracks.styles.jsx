import styled from 'styled-components';
import tw from 'twin.macro';

const Heading = styled.div`
  ${tw`
        mt-20
        grid
        gap-2
        lg:grid-rows-1 grid-cols-1
   `}
`;

const Sub = styled.div`
  ${tw`
       w-100
       lg:w-full
   `}
`;

const Tracks1 = styled.div`
  ${tw`
       grid
       grid-cols-track
       gap-5
       mt-10
   `}
`;

const Tracks2 = styled.div`
  ${tw`
        grid
        grid-rows-3
        gap-3
   `}
`;

const Head = styled.div`
  ${tw`
      row-start-2
      row-end-4
   `}
`;

const Cards = styled.div`
  ${tw`
      bg-secondary
      rounded-lg
      p-4
   `}
`;

const Head2 = styled.div`
  ${tw`
      grid
      grid-cols-4
      items-center
   `}
`;

const Text = styled.div`
  ${tw`
       col-start-2
       col-end-5
       justify-center
       ml-3
   `}
`;

export { Heading, Sub, Tracks1, Cards, Tracks2, Head, Head2, Text };
