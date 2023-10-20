import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.light ? '300' : '400')};
  ${tw`
   text-xs
   leading-4.5

   md:text-sm
   md:leading-5

   text-color-primary
   font-Prompt
`}
`;
