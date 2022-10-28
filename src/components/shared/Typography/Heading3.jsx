import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw` 
   text-xl
   leading-6 

   sm:text-3.5xl
   sm:leading-10

   text-color-primary
   font-Noto
`}
`;
