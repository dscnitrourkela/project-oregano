import styled from 'styled-components';
import tw from 'twin.macro';

const Heading = styled.div`
  ${tw`
        grid
        gap-2
        /* xl:grid-rows-2 grid-cols-2 */
        lg:grid-rows-1 grid-cols-1
    `}
`;

const Sub = styled.div`
  ${tw`
        w-100
        lg:w-full
    `}
`;

const FaqContainer = styled.div`
  ${tw`
        bg-secondary
        relative
        p-2
        pb-8
        rounded-lg
        grid
        col-span-3
        lg:col-span-1
   `}
`;

const Wrapper = styled.div`
  ${tw`
        grid
        grid-cols-5
        lg:grid-cols-1
        gap-5
        mt-10
        text-white
        w-full
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
        w-auto
        p-1.5
        sm:p-0.5
        bg-purple-light
        rounded-full
        sm:rounded-3xl
        relative
        text-black
    `}
  display: inline-block;
  max-width: 66%;
`;

const Ques = styled.div`
  ${tw`
        grid
        grid-cols-10
        mt-8
        mb-4
        sm:pr-2
    `}
`;
const Ul = styled.ul`
  ${tw`
        grid grid-flow-row auto-rows-max
        col-start-3
        col-end-10
        sm:col-start-1
        bg-background-dark
        p-5
        rounded-xl
        border border-gray-800
        mr-3
        sm:mr-1.5
    `}
`;

const List = styled.li`
  ${tw`
        p-4
        sm:px-1
        border-solid
        border-b border-gray-500
        cursor-pointer
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
        sm:px-1
        border-solid
        cursor-pointer
        font-normal
        text-base
        text-color-secondary
        font-roboto
        hover:text-white
    `}
`;

export { List, List1, Ul, Ques, Chat, Bot, Wrapper, FaqContainer, Heading, Img, Sub };
