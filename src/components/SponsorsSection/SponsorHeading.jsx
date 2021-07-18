import styled from 'styled-components';
import tw from 'twin.macro';
import { HighlightBody } from '..';

export const HeadingSection = styled.div`
  @media (max-width: 1200px) {
    max-width: 100vw;
  }
  max-width: 50vw;
  ${tw`p-8`}
`;

export const HeadText = styled(HighlightBody)`
  ${tw`text-gray-400 mt-1`}
  & >* {
    ${tw`text-color-primary cursor-pointer no-underline`}
  }
`;
