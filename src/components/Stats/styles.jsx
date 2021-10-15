// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
        flex
        gap-5
        w-full
        mt-5
        lg:grid grid-cols-1
    `}
`;

export const Description = styled.h2`
  ${tw`
    mt-2
    w-3/5
    text-color-secondary
    md:w-full
  `}
`;

export const YellowDiv = styled.div`
  ${tw`
       rounded-full h-52 w-52 flex items-center justify-center
       xl:h-48 xl:w-48 xl:left-60
       lg:h-72 lg:w-72 lg:left-1/2
       md:h-64 md:w-64 md:left-4/10
       2xsm:h-52 2xsm:w-52
       3xsm:h-40 3xsm:w-40
       mt-16
       bg-yellow-400
       relative
       left-72
       mr-10
       -top-10
   `}
  border: 1px solid #ebb722;
  box-shadow: 0 0 100px #ebb722;
`;

export const BlueDiv = styled.div`
  ${tw`
       rounded-full h-40 w-40 flex items-center justify-center
       xl:h-36 xl:w-36 xl:-right-24
       lg:w-56 lg:h-56 lg:-right-40
       md:w-44 md:h-44 md:left-1/10
       2xsm:h-40 2xsm:w-40
       3xsm:h-32 3xsm:w-32
       /* my-5 */
       bg-b-blue
       relative
       -right-24
       -top-20
   `}
  border: 1px solid #71A0CE;
  box-shadow: 0 0 100px #71a0ce;
`;

export const OrangeDiv = styled.div`
  ${tw`
       rounded-full h-40 w-40 flex items-center justify-center
       xl:h-36 xl:w-36 xl:-right-64
       lg:w-56 lg:h-56 lg:-right-1/2 lg:-top-40
       md:w-44 md:h-44 md:left-1/2
       2xsm:h-40 2xsm:w-40
       3xsm:h-32 3xsm:w-32
       mid:-mb-24
       /* my-5 */
       bg-b-green
       relative
       -right-80
       -top-32
       -mb-10
       pb-0

   `}
  border: 1px solid #8FA963;
  box-shadow: 0 0 100px #8fa963;
`;

export const StatsContainer = styled.div`
  ${tw`
       w-full
       bg-secondary
       mt-10
   `}
  display: grid;
`;

export const StatsContainer2 = styled.div`
  ${tw`
       bg-secondary
       mt-10
       w-full
   `}
`;

export const CardContainer = styled.div`
  ${tw`
  relative
  top-20
  left-20
  w-2/3
  z-30
  lg:w-2/3
  lg:mt-10
  md:mt-0
  md:w-2/3
  mid:-mt-10
  sm:mt-0
  sm:w-70/100
  sxm:w-2/3 
  sxm:-mt-10
  2xsm:w-60/100
  2xsm:-mt-10
  3xsm:-mt-16
   `}
  grid-area: 1/1;
`;

export const Cards = styled.div`
  ${tw`
      w-full
      mt-5
      /* bg-green-50 */
      rounded-3xl
      flex
      gap-10
      p-5
      2xsm:p-2
      font-poppins
   `}
`;

export const MobImage = styled.img`
  ${tw`
  relative
  w-1/2 
  ml-60
  mr-20
  -top-10
  sxm:ml-48
  2xsm:ml-40
  mid:ml-40
  mid:w-60/100
  lg:w-4/10 lg:ml-96
  md:w-1/2 md:ml-64
  `}
  grid-area: 1/1;
`;
