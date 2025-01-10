import styled from 'styled-components';
import tw from 'twin.macro';

export const GalleryHeadingContainer = styled.div`
  ${tw`
      my-auto
      border-2
      flex
      bg-[#f6dfc2]
      rounded-[1.125rem]
      w-fit
      mx-auto
      py-4
      px-12
    `}
  align-items: center;
  gap: 0.625rem;
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

export const CanvasContainer = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
