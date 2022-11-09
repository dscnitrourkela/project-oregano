import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`
  grid
  grid-cols-1
  gap-x-20

  sm:grid-cols-2
  sm:my-10
  sm:px-14
`}
`;

const FaqContainer = styled.div`
  ${tw`
  p-2
  `}
`;

const AnswerContainer = styled.div`
  ${tw`
  relative
  rounded-3xl
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
  rounded-xl
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
  bottom-12
  sm:absolute
  `}
`;

const BotImg = styled.img`
  ${tw`
  sm:h-52 
  sm:w-36 
  sm:block
  hidden 
  `}
`;
const BotMessage = styled.div`
  ${tw`
  p-3
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
    font-Noto
    leading-4
    cursor-pointer
    text-color-tertiary
    border-solid
    border-b border-color-tertiary
    hover:text-white
    sm:text-sm
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
