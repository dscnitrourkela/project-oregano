import styled from 'styled-components';
import tw from 'twin.macro';

const Heading = styled.div`
  ${tw`
        grid
        w-100
        grid-rows-1
        gap-4
        pr-2
    `}
`;

const FaqContainer = styled.div`
  ${tw`
        bg-secondary
        relative
        p-2
        rounded-lg
        sm:mr-8
   `}
`;

const Section = styled.div`
  ${tw`
        flex
        lg:grid grid-cols-1 
        md:w-100
        gap-5
        mt-4
        text-white
    `}
`;

const Bot = styled.div`
  ${tw`
        ml-4
        mt-5   
    `}
`;

const Img = styled.img`
  ${tw`
        float-left
        mr-2
        
    `}
`;

const Chat = styled.div`
  ${tw` 
        ml-3
        flex
        w-2/3
        p-1.5
        bg-purple-light
        rounded-full
        relative
        text-black
        border-2 border-gray-800
    `}
`;

const Ques = styled.div`
  ${tw`
        grid
        grid-cols-10
        mt-8
        mb-4
    `}
`;
const Ul = styled.ul`
  ${tw`
        grid grid-flow-row auto-rows-max
        col-start-3
        col-end-10
        bg-black
        p-5
        rounded-xl
        border border-gray-800
        mr-3 
    `}
`;

const List = styled.li`
  ${tw`
        p-4
        border-solid
        border-b border-gray-500
        cursor-default
        font-normal
        text-base
        text-color-secondary
        font-roboto
        hover:text-white
    `}
`;

const List1 = styled.li`
  ${tw`
        p-4
        border-solid
        cursor-default
        font-normal
        text-base
        text-color-secondary
        font-roboto
        hover:text-white
    `}
`;

export { List, List1, Ul, Ques, Chat, Bot, Section, FaqContainer, Heading, Img };
