import styled from 'styled-components';
import tw from 'twin.macro';

const ButtonDark = styled.button`
  ${tw`
        h-14 
        w-48
        mt-6
        mr-4
        bg-white
        border-0
        rounded-full
        cursor-pointer
        bg-background-dark
        text-color-primary
        border-color-primary
        border-2
        sm:m-0
    `}
`;

const ButtonLight = styled.button`
  ${tw`
        h-14 
        w-48
        mt-6
        mr-4
        bg-white
        border-0
        rounded-full
        cursor-pointer
    `}
  :hover {
    background-color: #f8f0e3;
  }
`;

export { ButtonDark, ButtonLight };
