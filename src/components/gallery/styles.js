import styled from 'styled-components';
import tw from 'twin.macro';

import { PrizesHeading, PrizesHeadingContainer } from '../prizes/styles';

export const GalleryHeadingContainer = styled(PrizesHeadingContainer)`
  ${tw`
   my-5 md:my-20
    
  `}
`;

export const SectionContainer = styled.div`
  ${tw`
      my-5
      mx-auto
      max-w-[1540px]
      w-full
      mb-12
  `}
`;
export const GalleryHeading = styled(PrizesHeading)``;

export const CanvasContainer = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
