import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`
  grid
  grid-cols-1
  gap-x-20

  mt-5
  sm:mt-14
  sm:grid-cols-2
  sm:my-10
  sm:px-14
`}
`;

const FaqContainer = styled.div`
  ${tw`
  pt-10
  sm:p-2
  `}
`;

const AnswerContainer = styled.div`
  ${tw`
  relative
  rounded-xl
  sm:rounded-xl
  lg:rounded-3xl
  p-4
  mt-4
  bg-[#202020]
  `}
`;

const Answer = styled.div`
  ${tw`
  p-3 
  mt-4 
  border-solid 
  border-2 
  border-yellow-300 
  rounded-lg
  sm:rounded-xl
  sm:mt-16 
  sm:p-4  
  lg:ml-20 
  `}
`;

const BotContainer = styled.div`
  ${tw`
  flex 
  flex-row 
  items-center 
  md:bottom-12
  sm:absolute
  `}
`;

const BotImg = styled.img`
  ${tw`
  sm:h-28 
  sm:w-24 
  lg:h-52 
  lg:w-36
  sm:block
  hidden 
  `}
`;

const BotMessage = styled.div`
  ${tw`
  py-3
  px-2
  sm:p-6
  `}
`;

const Head = styled.div`
  ${tw`
    p-2
  `}
`;

const Ques = styled.div`
  ${tw``}
`;

const Ul = styled.ul`
  ${tw``}
`;

const List = styled.li`
  ${tw`
    py-4
    mx-2
    text-xs
    sm:text-sm
    font-Noto
    leading-4
    cursor-pointer
    text-color-tertiary
    border-solid
    border-b border-color-tertiary
    hover:text-white
    `}
`;

export {
  Wrapper,
  AnswerContainer,
  FaqContainer,
  BotContainer,
  BotMessage,
  BotImg,
  Head,
  Ques,
  Ul,
  List,
  Answer,
};
