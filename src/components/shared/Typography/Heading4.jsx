import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h4`
  font-weight: ${(props) => (props.medium ? '500' : '400')};
  ${tw`
   text-xl
   leading-7

   md:text-2xl
   md:leading-9

   text-white
   font-Prompt


`}
  ${(props) => props.italic && 'font-style: italic;'}
`;
