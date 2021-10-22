import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    flex-col
    items-start
    justify-center
    /* min-h-screen */
  `}
  padding-left: 8%;
  height: fit-content;
`;

export const Time = styled.div`
  ${tw`
    grid
    gap-5
    relative
    text-white
    h-0
    font-roboto
    mb-4
    ml-12
`}
  grid-template-columns: repeat(15, minmax(340px,1fr));
`;

export const TimeR = styled.div`
  &::after {
    border-left: 2px dashed #666666;
    content: '';
    display: block;
    height: 32rem;
    text-align: center;
    margin-left: 19.5px;
    position: absolute;
    top: 24px;
    width: 2px;
    z-index: 0;
  }
`;

export const TimeC = styled.div`
  ${tw`
    flex
    gap-40
    text-white
`}
`;

export const RowContainer = styled.div`
  ${tw`
    mt-5
    grid
    grid-rows-4
    grid-cols-1
    gap-5
    overflow-x-scroll
    overflow-y-hidden
    pb-5
`}
  grid-template-rows: auto;
  -webkit-overflow-scrolling: touch;
`;

export const ScheduleContainer = styled.div`
  ${tw`
    grid
    w-screen
    gap-5
    mb-0
`}grid-template-columns: repeat(15, minmax(340px,1fr));
`;

export const Title = styled.div`
  text-align: start;
  color: white;
  ${tw`
    pl-8
    font-roboto
    text-lg
`}
`;

export const Title2 = styled.div`
  ${tw`
    text-color-secondary
    pl-8
    mt-2
    font-roboto
`}
  text-align: start;
`;

export const Wrapper = styled.div`
  ${tw`
    flex
    mt-5
`}
`;

export const DateContainer = styled.div`
  ${tw`
    grid
    grid-rows-1
    gap-12
    text-white
    h-full
    mt-18
    font-sixcaps
`}
  font-size: 4rem;
`;

export const Box = styled.div`
  ${tw`
    bg-secondary
    rounded-2xl
    w-full
    grid
`}

  height: 7rem;
  position: relative;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 28%;
    height: 55px;
    width: 50%;
    border-left: solid 3px;
    color: ${(props) => props.color};
  }
`;

export const Date = styled.div`
  ${tw`
    p-5
    pt-0
`}
  -ms-transform: rotate(20deg);
  transform: rotate(-90deg);
`;
export const Text = styled.div`
  ${tw`
  /* grid
  items-center */
    
`}margin: auto 0 auto 0;
`;
