import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h2`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-3.5xl 
   leading-11

   md:text-13xl
   md:leading-14

   text-color-primary
   font-Prompt
`}
${(props) => props.italic && 'font-style: italic;'}
`;
