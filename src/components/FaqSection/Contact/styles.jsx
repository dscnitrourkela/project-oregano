import styled from 'styled-components';
import tw from 'twin.macro';

export const Component1 = styled.div`
  ${tw`
      grid
      grid-rows-1
      grid-cols-7
    `}
`;

export const HeadText = styled.h3`
  ${tw`
        font-normal
        text-3xl
        text-color-primary
        font-roboto
        col-start-3
        col-end-7
        mt-6
    `}
    @media(max-width: 540px){
      width:100vw;
      padding-left: 5%;
      display: block;
    }
`;

export const Heading5 = styled.h6`
  ${tw`
        font-normal
        text-base
        text-color-primary
        font-roboto
        mt-6
        col-start-1
        col-end-3
    `}

`;

export const Gmail = styled.img`
  ${tw`
       mt-4
       ml-4
       col-start-1
       col-end-2
    `}

    @media(max-width: 320px){
      width:150%;
      height:auto;
    }
`;

export const Form = styled.div`
  ${tw`
       pt-10
       p-4
       md:grid grid-cols-1 auto-cols-max
    `}
`;

export const Username = styled.div`
  ${tw`
      xl: grid grid-cols-8
    `}

    @media(max-width: 540px){
      width:80vw;
      display: inline-block;
    }
`;

export const Email = styled.div`
  ${tw`
       xl: grid grid-cols-8
       mt-5
    `}
    @media(max-width: 540px){
      width:80vw;
      display: inline-block;
    }
`;

export const Message = styled.div`
  ${tw`
       xl: grid grid-cols-8
       mt-5
    `}
    @media(max-width: 540px){
      width:80vw;
      display: inline-block;
    }
`;

export const FormFillup = styled.input`
  ${tw`
      bg-background-dark
      appearance-none
      text-base
      border-none rounded w-full
      py-4 px-4
      text-color-primary
      outline-none
      w-full
      mt-2
      col-start-4
      col-end-9
    `}
`;

export const TextArea = styled.textarea`
  ${tw`
      bg-background-dark
      appearance-none
      border-none rounded w-full
      py-3 px-4
      w-full
      text-color-primary
      h-44
      mt-2
      text-base
      outline-none
      font-roboto
      col-start-4
      col-end-9
    `}
`;

export const SendButton = styled.button`
  ${tw`
      bg-background-dark
      appearance-none
      p-4 px-12 rounded-full
      text-white
      text-base
      font-roboto
      cursor-pointer
      hover:bg-white
      hover:text-black
      col-start-3
      col-end-6
    `}
    @media(max-width: 540px){
      align-items:center;
      width:60vw;
    }
    @media(max-width: 320px){
      align-items:center;
      width:70vw;
    }
`;

export const Component = styled.div`
  ${tw`
      p-4
      grid grid-cols-6
    `}

    @media(max-width: 540px){
      margin-right:60%;
    }
    @media(max-width: 320px){
      margin-left: -15%;
    }
`;

export const Error = styled.p`
  ${tw`
      text-red-500
      text-sm
      w-full
      font-roboto
    `}

    @media(max-width: 548px){
      margin:0;
    }
`;

export const ErrorComponent = styled.div`
  ${tw`
       col-start-4
       col-end-8
    `}
`;
