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
    top-[20%]
    text-center
    w-full
    z-10
  `}
`;

export const PrizeTitle = styled.div`
  ${tw`
    absolute
    top-[40%]
    text-center
    w-full
    z-10
  `}
`;
export const PrizesContainer = styled.div`
  ${tw` max-w-6xl
        mx-auto
        py-20
        min-h-screen
   `}
`;
export const PrizesHeadingContainer = styled.div`
  display: inline-flex;
  padding: 1rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.125rem;
  background: #f6dfc2;
`;
export const PrizesHeading = styled(H1)`
  ${tw`
    text-center
    w-full
  `}
`;

export const PrizesContent = styled.div`
  ${tw` my-10
        flex
        items-center
        justify-center
        w-full
        gap-3`}
`;
