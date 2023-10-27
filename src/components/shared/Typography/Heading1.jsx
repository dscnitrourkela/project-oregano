import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h1`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-13xl
   leading-14

   md:text-14xl
   md:leading-15

   text-white
   font-Prompt
`}
  ${(props) => props.italic && 'font-style: italic;'}
`;
