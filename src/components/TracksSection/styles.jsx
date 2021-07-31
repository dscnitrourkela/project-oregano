// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

export const Background = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrackIcon = styled.img`
  height: 38px;
  width: auto;
`;

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
      pb-5
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
