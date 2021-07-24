import styled from 'styled-components';
import tw from 'twin.macro';

export const Contact = styled.div`
  ${tw`
      bg-secondary
      relative
      p-6
      rounded-lg
    `}
`;

export const HeadText = styled.h3`
  ${tw`
        font-normal
        text-3xl
        text-color-primary
        font-roboto
        col-start-2
        col-end-5
        mt-6
    `}
    @media(max-width: 320px){
      font-size:1.5rem;
      padding-left:10px;
    }
`;

export const Heading5 = styled.h6`
  ${tw`
        font-normal
        text-base
        text-color-primary
        font-roboto
        mt-3
    `}
`;

export const Gmail = styled.img`
  ${tw`
       mt-4
       ml-3
    `}

    @media(max-width: 320px){
      width:80%;
      height:80%;
    }
`;

export const Component1 = styled.div`
  ${tw`
      grid
      grid-rows-1
    `}
`;

export const Form = styled.div`
  ${tw`
       pt-10
       p-5
       md: grid grid-cols-1 auto-cols-fr
    `}
`;

export const Username = styled.div`
  ${tw`
      xl: grid grid-cols-3
    `}

    @media(max-width: 540px){
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-row:3;
      grid-gap: 10%;
    }
`;

export const Email = styled.div`
  ${tw`
       xl: grid grid-cols-3
       mt-5
    `}
    @media(max-width: 540px){
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-row:3;
      grid-gap: 10%;
    }
`;

export const Message = styled.div`
  ${tw`
       xl: grid grid-cols-3
       mt-5
    `}
    @media(max-width: 540px){
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-row:3;
      grid-gap: 6%;
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
      text-base
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
      text-base
      font-roboto
      cursor-pointer
      hover:bg-white
      hover:text-black
    `}
`;

export const Component = styled.div`
  ${tw`
      p-5
      w-full
      ml-36
    `}

    @media(max-width: 540px){
      margin-left: 10%;
      margin-top:15%;
    }
    @media(max-width: 320px){
      margin-left: 0%;
      margin-top:15%;
    }
`;

export const Error = styled.p`
  ${tw`
      text-red-500
      text-sm
      ml-44
      w-2/3
      font-roboto
    `}

    @media(max-width: 548px){
      margin:0;
      margin-bottom: 5%;
    }
`;
