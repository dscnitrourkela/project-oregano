import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1 } from '../shared';

export const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    min-h-[400px]
    sm:min-h-screen
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-row
    items-start
    justify-center
  `}
`;

export const HeroBody = styled.div`
  ${tw`
    mt-[7%]
    h-full
    flex
    gap-[2rem]
    justify-center
    items-center
    text-white
    flex-col
    overflow-x-hidden
    overflow-y-hidden
    w-full
  `}
`;

export const HeroTitle = styled.div`
  ${tw`
    flex
    justify-center
    gap-2
    items-center
    flex-col
    px-0
    md:px-12
    mx-5
    md:mx-10
    sm:mt-32
    mt-10
  `}
`;

export const HeroInside = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    flex-row
    px-0
    gap-0
    sm:gap-0
    w-full
  `}
`;

export const ContentBlock = styled.div`
  ${tw`
    max-w-[360px]
    pb-4
    sm:max-w-sm
    md:max-w-xl
    lg:max-w-3xl
  `}
`;

export const HACKimg = styled.img`
  ${tw`
    flex
    justify-center
    items-center
    w-40
    sm:w-48
    md:w-72
    lg:w-96
    flex-row
    px-2
    gap-3
  `}
  @media (max-width: 320px) {
    ${tw`w-32`}
  }
`;

export const NITRimg = styled.img`
  ${tw`
    w-40
    sm:w-48
    md:w-72
    lg:w-96
 `}
  @media (max-width: 320px) {
    ${tw`w-32`}
  }
`;

export const HeroHeadingBase = styled.div`
  ${tw`
      flex
      justify-end
      w-full
  `}
`;

export const FIVEimg = styled.img`
  ${tw`
    w-12
    sm:w-12
    md:w-24
    lg:w-28
  `}
`;

export const SubTitle = styled.p`
  ${tw`
    tracking-[0.26em]
    text-lg
    text-center
    sm:tracking-wider
    sm:text-2xl
    font-Inter
    font-bold
  `}
`;

export const TaglineText = styled(Body1)`
  ${tw`
    mt-4
    sm:mt-6
    text-left
    md:text-center
    lg:text-center
    text-xs
    leading-6
    md:text-base
    lg:text-lg
    px-0
    md:px-4
    sm:mx-10
    mx-0
    md:max-w-[700px]
    max-w-[266px]
  `}
`;

export const Button = styled.button`
  ${tw`
  relative
  inline-block
  mt-[20px]
  sm:mt-[30px]
  mb-[20px]
  border-none
  rounded-[30px]
  bg-transparent
`}
  & a {
    color: rgb(0, 0, 0);
    font-family: 'Prompt', sans-serif, 'Varela Round', sans-serif;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    background-color: #ffffff;
    display: block;
    position: relative;
    padding: 30px 85px;
    text-shadow: 0px 1px 0px #000;
    box-shadow: #c48dff 3px 3px, #ff8cd9 6px 6px, #35e1ff 9px 9px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 15px;
    transition: box-shadow 0.3s;

    &:active {
      top: 10px;
      background-color: #ffffff;
      box-shadow: inset 0 1px 0 #000000, inset 0 -2px 0 #a30fd4;
    }
  }

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  &.clicked a {
    display: inline-block !important;
  }

  @media (max-width: 768px) {
    & a {
      font-size: 15px;
      font-weight: 500;
      padding: 15px 40px;
      box-shadow: #c48dff 1px 1px, #ff8cd9 2px 2px, #35e1ff 3px 3px;
      border-radius: 10px;
    }
  }
`;
