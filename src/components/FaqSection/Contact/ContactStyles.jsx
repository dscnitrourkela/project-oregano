import styled from 'styled-components';
import tw from 'twin.macro';

export const Contact = styled.div`
  ${tw`
      bg-background-darker
      w-full max-w-xl
      sm: max-w-sm grid grid-cols-1
      md: max-w-lg grid grid-cols-1
    `}
`;

export const HeadText = styled.h3`
  ${tw`
        font-normal
        text-3xl
        text-color-primary
        font-roboto
        text-left
        mt-6
    `}
`;

export const Heading5 = styled.h6`
  ${tw`
        font-normal
        text-sm
        w-full
        text-color-primary
        font-roboto
        mt-3
    `}
`;

export const Gmail = styled.img`
  ${tw`
       mt-4
    `}
`;

export const Form = styled.div`
  ${tw`
       pt-6
       xl: grid grid-flow-row
       md: grid grid-cols-1 auto-cols-fr
    `}
`;

export const Username = styled.div`
  ${tw`
       xl: grid grid-cols-3
    `}
`;

export const Email = styled.div`
  ${tw`
       xl: grid grid-cols-3
       mt-4
    `}
`;

export const Message = styled.div`
  ${tw`
       xl: grid grid-cols-3
       mt-4
    `}
`;

export const FormFillup = styled.input`
  ${tw`
      bg-background-dark
      appearance-none
      border-none rounded w-full
      py-4 px-4
      text-color-primary
      outline-none
      w-full col-span-2
    `}
`;

export const TextArea = styled.textarea`
  ${tw`
      bg-background-dark
      appearance-none
      border-none rounded w-full
      py-2 px-4
      text-color-primary
      h-44
      outline-none
      font-roboto
      col-span-2
    `}
`;

export const SendButton = styled.button`
  ${tw`
      bg-background-dark
      appearance-none
      p-4 px-9 rounded-full
      text-white
      font-roboto
      cursor-pointer
      hover:bg-white
      hover:text-black
    `}
`;

export const Component = styled.div`
  ${tw`
      p-5
      ml-32
    `}
`;

export const Error = styled.p`
  ${tw`
      text-red-500
      text-sm
      sm: ml-40
      w-full
      font-roboto
    `}
`;
