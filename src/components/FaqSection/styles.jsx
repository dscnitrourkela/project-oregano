import styled from 'styled-components';
import tw from 'twin.macro';
import { Body2 } from '../shared';

export const Wrapper = styled.div`
  ${tw`
  grid
  grid-cols-1
  gap-x-20

  mt-5
  md:mt-14
  md:grid-cols-2
  md:my-10
  md:pl-14
`}
`;

export const FaqContainer = styled.div`
  ${tw`
  pt-10
  md:p-2
  `}
`;

export const AnswerContainer = styled.div`
  ${tw`
  relative
  rounded-xl
  md:max-w-[560px]
  md:rounded-xl
  lg:rounded-3xl
  p-4
  mt-4
  bg-[#202020]
  `}
`;

export const Arrow = styled.span`
  ${tw`
    inline-flex
    text-btn-yellow
    md:text-4xl
  `}
`;

export const Answer = styled.div`
  ${tw`
  p-3 
  mt-4 
  border-solid 
  border-2 
  border-yellow-300 
  rounded-lg
  md:rounded-xl
  md:mt-16 
  md:p-4  
  lg:ml-20 
  `}
`;

export const BotContainer = styled.div`
  ${tw`
  flex 
  flex-row 
  justify-end
  items-center 
  md:bottom-12
  md:absolute
  `}
`;

export const BotImg = styled.img`
  ${tw`
  absolute
  -bottom-4
  -left-14
  object-contain
  md:h-[300px] 
  lg:h-[350px]
  md:block
  hidden 
  `}
`;

export const BotMessage = styled.div`
  ${tw`
  md:w-[60%]
  py-3
  px-2
  md:pr-6
  md:py-0
  `}
`;

export const Head = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
  `}
`;

export const List = styled(Body2)`
  color: ${(props) => (props.active ? 'rgba(234, 234, 234, 1)' : 'rgba(163, 163, 163, 1)')};

  ${tw`
    py-4
    md:py-[24.33px]
    leading-4
    cursor-pointer
    border-solid
    border-b border-color-tertiary
    hover:text-white
    `}
`;

// export {
//   Wrapper,
//   AnswerContainer,
//   FaqContainer,
//   BotContainer,
//   BotMessage,
//   BotImg,
//   Head,
//   List,
//   Answer,
//   Arrow,
// };
