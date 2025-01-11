import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

import { H1 } from '../shared/typography/Headings';

export const PrizeCardContainer = styled.div`
  ${tw`
    relative
    flex
    flex-col
    items-center
    justify-center
  `}
`;

export const PrizeCardImage = styled(Image)`
  ${tw`
    relative
    h-[300px]
    w-[250px]
  `}
`;

export const PrizeAmount = styled(H1)`
  ${tw`
    absolute
    top-[35%]
    sm:top-[32%]
    ssm:top-[30%]
    msm:top-[25%]
    smd:top-[20%]
    text-center
    w-full
    z-10
    text-2xl
    ssm:text-3xl
    msm:text-4xl
    md:text-5xl
  `}
`;

export const PrizesContainer = styled.div`
  ${tw`max-w-6xl mx-auto py-20 flex flex-col items-center justify-center`}
`;
export const PrizesHeadingContainer = styled.div`
  display: inline-flex;
  /* padding: 1rem 3rem; */
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.125rem;
  background: #f6dfc2;
  ${tw`md:px-[3rem] md:py-[1rem] ssm:px-[2rem] ssm:py-[1rem] px-[2rem] py-[0.5rem]`};
`;

export const PrizesHeading = styled(H1)`
  ${tw`
    text-center
    w-full
    md:text-3xl
    ssm:text-3xl
    text-2xl
  `}
`;

export const PrizesContent = styled.div`
  ${tw` md:my-10
        flex
        items-center
        justify-center
        w-full
        gap-3`}
`;
