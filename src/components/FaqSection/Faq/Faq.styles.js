import styled from 'styled-components';
import tw from 'twin.macro';


const Heading = styled.div`
  ${tw`
        grid
        w-100
        grid-rows-1
        gap-4
    `}
`

const FaqContainer = styled.div`
  ${tw`
        bg-secondary
        relative
        p-2
        rounded-lg
   `}
`

const Section = styled.div`
  ${tw`
        grid
        grid-flow-col 
        grid-cols-2
        w-full
        gap-4
        mt-4
        text-white
    `}
`

const Bot = styled.div`
  ${tw`
        m-4
        flex
    `}
`

const Chat = styled.div`
  ${tw`
        ml-3
        flex
        items-center
        justify-center
        bg-purple-light
        rounded-full
        relative
        text-black
        border-2 border-gray-800
    `}
`

const Bodydark = styled.p`
  ${tw`
        font-normal
        text-base
        text-black
        font-roboto
        py-1 
        px-5
    `}
`

const Ques = styled.div`
  ${tw`
        grid
        grid-cols-10
        mt-8
        mb-4
    `}
`
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
`

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
`

 const List1 = styled.li
`${tw`
        p-4
        border-solid
        cursor-default
        font-normal
        text-base
        text-color-secondary
        font-roboto
        hover:text-white
    `}
`


export {List, List1, Ul, Ques, Bodydark, Chat, Bot, Section, FaqContainer, Heading};