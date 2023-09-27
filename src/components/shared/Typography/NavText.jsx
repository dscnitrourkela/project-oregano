import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  ${tw`
   text-sm
   leading-4

   md:text-sm
   md:leading-4

   text-color-primary
   font-Prompt
`}
${(props) => props.italic && 'font-style: italic;'}
`;
