import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw` 
   text-2xl
   leading-9

   md:text-3.5xl
   md:leading-11

   text-color-primary
   font-Prompt
`}
`;
