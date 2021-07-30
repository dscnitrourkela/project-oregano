import styled from 'styled-components';
import tw from 'twin.macro';

const Button = styled.button`
  ${tw`
        h-14
        w-48
        mt-6
        mr-4
        border-0
        rounded-full
        cursor-pointer
        sm:m-0
    `}
`;

export const ButtonDark = styled(Button)`
  ${tw`
        bg-background-dark
        text-color-primary
        border-color-primary
        border-2
    `}

  :hover {
    background-color: #2f2f33;
  }
`;

export const ButtonLight = styled(Button)`
  ${tw`
        bg-white
    `}
  :hover {
    background-color: #f8f0e3;
  }
`;
